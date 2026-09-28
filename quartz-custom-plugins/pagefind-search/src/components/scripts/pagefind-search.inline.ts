import {
  removeAllChildren,
  normalizeRelativeURLs,
  registerEscapeHandler,
  resolveBasePath,
  escapeHTML,
} from "@quartz-community/utils";

interface DisplayItem {
  slug: string;
  title: string; // HTML avec <span class="highlight"> déjà inséré
  content: string; // HTML avec <span class="highlight"> déjà inséré (excerpt Pagefind)
}

let currentSearchTerm: string = "";
// Nombre de résultats détaillés (data()) récupérés et affichés. Le conteneur
// défile (overflow-y: auto), donc pas besoin de pagination pour cette valeur.
const numSearchResults = 40;
const contextWindowWords = 30;

const parser = new DOMParser();
const fetchContentCache = new Map<string, Element[]>();

// ---------------------------------------------------------------------------
// Pagefind — chargement paresseux du runtime généré par `npx pagefind` après
// le build Quartz (public/_pagefind/pagefind.js). Contrairement à FlexSearch,
// rien n'est chargé tant que l'utilisateur n'a pas ouvert la recherche.
// ---------------------------------------------------------------------------
type PagefindModule = {
  init?: () => Promise<void>;
  debouncedSearch: (
    term: string,
    options?: Record<string, unknown>,
    debounceMs?: number,
  ) => Promise<{ results: Array<{ data: () => Promise<PagefindResultData> }> } | null>;
};

interface PagefindResultData {
  url: string;
  meta: { title?: string };
  excerpt: string; // HTML, extraits déjà surlignés par Pagefind avec <mark>
}

let pagefind: PagefindModule | null = null;
let pagefindLoading: Promise<PagefindModule> | null = null;

async function ensurePagefind(): Promise<PagefindModule> {
  if (pagefind) return pagefind;
  if (!pagefindLoading) {
    const pagefindUrl = resolveBasePath("_pagefind/pagefind.js");
    pagefindLoading = import(/* @vite-ignore */ pagefindUrl).then(async (mod: PagefindModule) => {
      if (typeof mod.init === "function") await mod.init();
      pagefind = mod;
      return mod;
    });
  }
  return pagefindLoading;
}

// ---------------------------------------------------------------------------
// Conversion url Pagefind -> slug Quartz. Validé en test local : Pagefind
// rapporte `url` comme le chemin propre de la page (ex: "/nomox_fr/.../2007l0014_fr.15"),
// sans "index.html" ni extension — le mapping ci-dessous fonctionne tel quel.
// ---------------------------------------------------------------------------
function pagefindUrlToSlug(url: string): string {
  let slug = url.replace(/^\//, "").replace(/index\.html$/, "").replace(/\.html$/, "");
  slug = slug.replace(/\/$/, "");
  return slug;
}

async function fetchContent(slug: string): Promise<Element[]> {
  if (fetchContentCache.has(slug)) {
    return fetchContentCache.get(slug) as Element[];
  }
  const targetUrl = new URL(resolveBasePath(slug), window.location.origin).toString();
  try {
    const res = await fetch(targetUrl);
    if (!res.ok) return [];
    const text = await res.text();
    const html = parser.parseFromString(text ?? "", "text/html");
    normalizeRelativeURLs(html, targetUrl);
    const contents = Array.from(html.getElementsByClassName("popover-hint"));
    fetchContentCache.set(slug, contents);
    return contents;
  } catch {
    return [];
  }
}

const cleanupFns: Array<() => void> = [];
function addCleanup(fn: () => void) {
  cleanupFns.push(fn);
}
function runCleanups() {
  cleanupFns.forEach((fn) => fn());
  cleanupFns.length = 0;
}

// ---------------------------------------------------------------------------
// Surlignage — identique à la logique du plugin `search` d'origine, pour le
// titre (Pagefind ne le surligne pas lui-même) et pour le contenu prévisualisé
// (page live récupérée par fetchContent, indépendante de l'indexation).
// ---------------------------------------------------------------------------
function tokenizeTerm(term: string): string[] {
  const tokens = term.split(/\s+/).filter((t) => t.trim() !== "");
  const tokenLen = tokens.length;
  if (tokenLen > 1) {
    for (let i = 1; i < tokenLen; i++) {
      tokens.push(tokens.slice(0, i + 1).join(" "));
    }
  }
  return tokens.sort((a, b) => b.length - a.length);
}

function highlight(searchTerm: string, text: string, trim?: boolean): string {
  const tokenizedTerms = tokenizeTerm(searchTerm);
  let tokenizedText = escapeHTML(text)
    .split(/\s+/)
    .filter((t) => t !== "");

  let startIndex = 0;
  let endIndex = tokenizedText.length - 1;

  if (trim) {
    const includesCheck = (tok: string) =>
      tokenizedTerms.some((term) => tok.toLowerCase().startsWith(term.toLowerCase()));
    const occurrencesIndices = tokenizedText.map(includesCheck);

    let bestSum = 0;
    let bestIndex = 0;
    for (let i = 0; i < Math.max(tokenizedText.length - contextWindowWords, 0); i++) {
      const window = occurrencesIndices.slice(i, i + contextWindowWords);
      const windowSum = window.reduce((total, cur) => total + (cur ? 1 : 0), 0);
      if (windowSum >= bestSum) {
        bestSum = windowSum;
        bestIndex = i;
      }
    }

    startIndex = Math.max(bestIndex - contextWindowWords, 0);
    endIndex = Math.min(startIndex + 2 * contextWindowWords, tokenizedText.length - 1);
    tokenizedText = tokenizedText.slice(startIndex, endIndex);
  }

  const slice = tokenizedText
    .map((tok) => {
      let result = tok;
      for (const searchTok of tokenizedTerms) {
        if (tok.toLowerCase().includes(searchTok.toLowerCase())) {
          const regex = new RegExp(searchTok.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
          result = tok.replace(regex, (match) => `<span class="highlight">${match}</span>`);
          break;
        }
      }
      return result;
    })
    .join(" ");

  return (
    (startIndex === 0 ? "" : "...") + slice + (endIndex === tokenizedText.length - 1 ? "" : "...")
  );
}

function highlightHTML(searchTerm: string, el: HTMLElement): string {
  const tokenizedTerms = tokenizeTerm(searchTerm).filter((term) => term.trim() !== "");
  if (tokenizedTerms.length === 0) return el.innerHTML;
  const html = parser.parseFromString(el.innerHTML, "text/html");
  const combined = tokenizedTerms
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  if (combined === "") return el.innerHTML;
  const regex = new RegExp(combined, "gi");
  const walker = html.createTreeWalker(html.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let node: Text | null = walker.nextNode() as Text | null;
  while (node) {
    nodes.push(node);
    node = walker.nextNode() as Text | null;
  }
  for (const textNode of nodes) {
    const text = textNode.nodeValue ?? "";
    regex.lastIndex = 0;
    if (!regex.test(text)) continue;
    regex.lastIndex = 0;
    const fragment = html.createDocumentFragment();
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(html.createTextNode(text.slice(lastIndex, match.index)));
      }
      const span = html.createElement("span");
      span.className = "highlight";
      span.textContent = match[0];
      fragment.appendChild(span);
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      fragment.appendChild(html.createTextNode(text.slice(lastIndex)));
    }
    textNode.parentNode?.replaceChild(fragment, textNode);
  }
  return html.body.innerHTML;
}

/** Convertit les <mark> de Pagefind en <span class="highlight"> pour réutiliser le CSS existant */
function markToHighlightSpan(html: string): string {
  return html.replace(/<mark>/g, '<span class="highlight">').replace(/<\/mark>/g, "</span>");
}

// ---------------------------------------------------------------------------
// UI — bouton, modal, clavier, résultats, preview. Structure identique au
// plugin `search` d'origine ; seule la recherche par tags (#tag) a été retirée.
// ---------------------------------------------------------------------------
async function setupSearch() {
  const searchElements = document.querySelectorAll(".search");

  for (const searchEl of Array.from(searchElements)) {
    const container = searchEl.querySelector(".search-container") as HTMLElement | null;
    const searchButton = searchEl.querySelector(".search-button") as HTMLElement | null;
    const searchBar = searchEl.querySelector(".search-bar") as HTMLInputElement;
    const searchLayout = searchEl.querySelector(".search-layout");

    if (!container || !searchButton || !searchBar || !searchLayout) continue;

    const sidebar = container.closest(".sidebar") as HTMLElement | null;
    const enablePreview = searchLayout.getAttribute("data-preview") === "true";

    let results = searchLayout.querySelector(".results-container") as HTMLDivElement | null;
    if (!results) {
      results = document.createElement("div");
      results.className = "results-container";
      results.setAttribute("role", "listbox");
      results.setAttribute("aria-label", "Résultats de recherche");
      searchLayout.appendChild(results);
    }

    let preview = searchLayout.querySelector(".preview-container") as HTMLDivElement | null;
    if (enablePreview && !preview) {
      preview = document.createElement("div");
      preview.className = "preview-container";
      searchLayout.appendChild(preview);
    }

    let currentHover: HTMLElement | null = null;
    let previewToken = 0;
    let previewDebounceTimer: ReturnType<typeof setTimeout> | null = null;

    const hideSearch = () => {
      container.classList.remove("active");
      if (sidebar) sidebar.style.zIndex = "";
      searchButton.setAttribute("aria-expanded", "false");
      searchBar.value = "";
      removeAllChildren(results!);
      if (preview) removeAllChildren(preview);
      currentSearchTerm = "";
      currentHover = null;
      searchButton.focus();
    };

    const showSearch = () => {
      if (sidebar) sidebar.style.zIndex = "9999";
      container.classList.add("active");
      searchButton.setAttribute("aria-expanded", "true");
      searchBar.focus();
    };

    const displayResults = async (finalResults: DisplayItem[], totalCount: number) => {
      removeAllChildren(results!);

      if (totalCount > 0) {
        const countLabel = document.createElement("p");
        countLabel.className = "result-count";
        countLabel.textContent =
          totalCount === 1 ? "1 résultat" : `${totalCount} résultats`;
        results!.appendChild(countLabel);
      }

      if (finalResults.length === 0) {
        const noMatch = document.createElement("a");
        noMatch.className = "result-card no-match";
        const noMatchTitle = document.createElement("h3");
        noMatchTitle.textContent = "Aucun résultat.";
        const noMatchHint = document.createElement("p");
        noMatchHint.textContent = "Essayez un autre terme ?";
        noMatch.appendChild(noMatchTitle);
        noMatch.appendChild(noMatchHint);
        results!.appendChild(noMatch);
        currentHover = null;
        if (preview) removeAllChildren(preview);
        return;
      }

      for (const item of finalResults) {
        const itemTile = document.createElement("a");
        itemTile.className = "result-card";
        itemTile.id = item.slug;
        itemTile.href = resolveBasePath(item.slug);

        const titleEl = document.createElement("h3");
        titleEl.className = "card-title";
        titleEl.innerHTML = item.title.replace(/<(?!\/?span\b)[^>]*>/gi, "");
        itemTile.appendChild(titleEl);

        const descEl = document.createElement("p");
        descEl.className = "card-description";
        descEl.innerHTML = item.content.replace(/<(?!\/?span\b)[^>]*>/gi, "");
        itemTile.appendChild(descEl);

        results!.appendChild(itemTile);
      }
    };

    const getResultElements = (): HTMLElement[] =>
      Array.from(results!.querySelectorAll<HTMLElement>(".result-card:not(.no-match)"));

    const updatePreview = async (el: HTMLElement | null) => {
      if (!preview) return;
      removeAllChildren(preview);
      if (!el) return;
      const slug = el.id;
      const token = ++previewToken;
      const contents = await fetchContent(slug);
      if (token !== previewToken) return;
      const previewInner = document.createElement("div");
      previewInner.className = "preview-inner";
      for (const contentEl of contents) {
        const cloned = contentEl.cloneNode(true) as HTMLElement;
        if (currentSearchTerm.trim() !== "") {
          cloned.innerHTML = highlightHTML(currentSearchTerm, cloned);
        }
        previewInner.appendChild(cloned);
      }
      preview.appendChild(previewInner);

      requestAnimationFrame(() => {
        const highlights = Array.from(preview!.getElementsByClassName("highlight"));
        if (highlights.length === 0) return;
        highlights.sort((a, b) => b.innerHTML.length - a.innerHTML.length);
        const target = highlights[0] as HTMLElement;
        let offset = 0;
        let current: HTMLElement | null = target;
        while (current && current !== preview) {
          offset += current.offsetTop;
          current = current.offsetParent as HTMLElement | null;
        }
        preview!.scrollTop = Math.max(0, offset - 50);
      });
    };

    const setFocus = (el: HTMLElement | null) => {
      if (currentHover) currentHover.classList.remove("focus");
      currentHover = el;
      if (currentHover) {
        currentHover.classList.add("focus");
        currentHover.scrollIntoView({ block: "nearest" });
      }
      if (previewDebounceTimer) clearTimeout(previewDebounceTimer);
      previewDebounceTimer = setTimeout(() => updatePreview(currentHover), 150);
    };

    const focusByIndex = (index: number) => {
      const resultElements = getResultElements();
      if (resultElements.length === 0) {
        setFocus(null);
        return;
      }
      const clamped = Math.min(Math.max(index, 0), resultElements.length - 1);
      setFocus(resultElements[clamped] ?? null);
    };

    const focusNext = () => {
      const resultElements = getResultElements();
      if (resultElements.length === 0) return;
      const currentIndex = currentHover ? resultElements.indexOf(currentHover) : -1;
      focusByIndex(currentIndex + 1);
    };

    const focusPrevious = () => {
      const resultElements = getResultElements();
      if (resultElements.length === 0) return;
      const currentIndex = currentHover
        ? resultElements.indexOf(currentHover)
        : resultElements.length;
      focusByIndex(currentIndex - 1);
    };

    const storeSearchTerm = () => {
      if (currentSearchTerm.trim()) sessionStorage.setItem("search-term", currentSearchTerm.trim());
    };

    const onType = async (e: Event) => {
      const inputValue = (e.target as HTMLInputElement).value;
      currentSearchTerm = inputValue;

      const hasContent = inputValue.trim() !== "";
      searchLayout.classList.toggle("display-results", hasContent);

      if (!hasContent) {
        removeAllChildren(results!);
        if (preview) removeAllChildren(preview);
        currentHover = null;
        return;
      }

      const pf = await ensurePagefind();
      const searchResponse = await pf.debouncedSearch(inputValue, {}, 200);
      // debouncedSearch renvoie null si une frappe plus récente a pris le dessus
      if (!searchResponse) return;

      const totalCount = searchResponse.results.length;
      const rawResults = await Promise.all(
        searchResponse.results.slice(0, numSearchResults).map((r) => r.data()),
      );

      const finalResults: DisplayItem[] = rawResults.map((r) => ({
        slug: pagefindUrlToSlug(r.url),
        title: highlight(inputValue, r.meta.title || ""),
        content: markToHighlightSpan(r.excerpt),
      }));

      await displayResults(finalResults, totalCount);
      const resultElements = getResultElements();
      setFocus(resultElements[0] ?? null);
    };

    const onButtonClick = (e: Event) => {
      e.stopPropagation();
      showSearch();
    };
    searchButton.addEventListener("click", onButtonClick);
    addCleanup(() => searchButton.removeEventListener("click", onButtonClick));

    searchBar.addEventListener("input", onType);
    addCleanup(() => searchBar.removeEventListener("input", onType));

    const onSearchBarKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || (e.shiftKey && e.key === "Tab")) {
        e.preventDefault();
        focusPrevious();
        return;
      }
      if (e.key === "ArrowDown" || e.key === "Tab") {
        e.preventDefault();
        focusNext();
        return;
      }
      if (e.key === "Enter" && !e.isComposing) {
        const focused = currentHover;
        if (focused instanceof HTMLAnchorElement) {
          e.preventDefault();
          storeSearchTerm();
          hideSearch();
          focused.click();
        }
      }
    };
    searchBar.addEventListener("keydown", onSearchBarKeydown);
    addCleanup(() => searchBar.removeEventListener("keydown", onSearchBarKeydown));

    const onDocumentKeydown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
        e.preventDefault();
        container.classList.contains("active") ? hideSearch() : showSearch();
      }
    };
    document.addEventListener("keydown", onDocumentKeydown);
    addCleanup(() => document.removeEventListener("keydown", onDocumentKeydown));

    const onResultsClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest(".result-card") as HTMLAnchorElement | null;
      if (!target || target.classList.contains("no-match")) return;
      if (e instanceof MouseEvent && (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)) return;
      storeSearchTerm();
      hideSearch();
    };
    const onResultsMouseover = (e: Event) => {
      const target = (e.target as HTMLElement).closest(".result-card") as HTMLElement | null;
      if (!target || target.classList.contains("no-match")) return;
      setFocus(target);
    };
    results.addEventListener("click", onResultsClick);
    results.addEventListener("mouseover", onResultsMouseover);
    addCleanup(() => {
      results!.removeEventListener("click", onResultsClick);
      results!.removeEventListener("mouseover", onResultsMouseover);
    });

    const cleanupEscapeHandler = registerEscapeHandler(container, hideSearch);
    addCleanup(cleanupEscapeHandler);
  }
}

function scrollToSearchTerm() {
  const term = sessionStorage.getItem("search-term");
  if (!term) return;
  sessionStorage.removeItem("search-term");

  requestAnimationFrame(() => {
    const headingSelector =
      ".popover-hint h1, .popover-hint h2, .popover-hint h3, .popover-hint h4, " +
      ".popover-hint h5, .popover-hint h6, article h1, article h2, article h3";
    const bodySelector =
      ".popover-hint p, .popover-hint li, .popover-hint td, .popover-hint th, " +
      ".popover-hint blockquote, article p, article li";
    const headings = document.querySelectorAll(headingSelector);
    const bodyEls = document.querySelectorAll(bodySelector);
    const candidates = [...Array.from(headings), ...Array.from(bodyEls)];

    for (const el of candidates) {
      const text = el.textContent ?? "";
      const idx = text.toLowerCase().indexOf(term.toLowerCase());
      if (idx === -1) continue;

      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      let charCount = 0;
      let node: Text | null;
      let startNode: Text | null = null;
      let startOffset = 0;
      let endNode: Text | null = null;
      let endOffset = 0;

      while ((node = walker.nextNode() as Text | null)) {
        const len = node.nodeValue?.length ?? 0;
        if (!startNode && charCount + len > idx) {
          startNode = node;
          startOffset = idx - charCount;
        }
        if (startNode && charCount + len >= idx + term.length) {
          endNode = node;
          endOffset = idx + term.length - charCount;
          break;
        }
        charCount += len;
      }

      if (!startNode || !endNode) continue;

      try {
        const range = document.createRange();
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        const span = document.createElement("span");
        span.className = "search-scroll-target";
        range.surroundContents(span);
        span.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(() => {
          span.classList.add("fade-out");
          setTimeout(() => {
            const parent = span.parentNode;
            if (parent) {
              parent.replaceChild(document.createTextNode(span.textContent || ""), span);
              parent.normalize();
            }
          }, 1000);
        }, 2000);
      } catch {
        el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      break;
    }
  });
}

async function handleNavOrRender() {
  runCleanups();
  await setupSearch();
  scrollToSearchTerm();
}

document.addEventListener("nav", handleNavOrRender);
document.addEventListener("render", handleNavOrRender);
