import type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
} from "@quartz-community/types";
import { classNames } from "../util/lang";
import style from "./styles/search.scss";
// @ts-expect-error - inline script imported as string by esbuild loader
import script from "./scripts/pagefind-search.inline.ts";

export interface PagefindSearchOptions {
  /** Affiche le panneau d'aperçu du contenu de la page à côté des résultats */
  enablePreview: boolean;
}

const defaultOptions: PagefindSearchOptions = {
  enablePreview: true,
};

// Textes en dur (FR) — le site NOMOX est mono-langue, pas besoin du système i18n à 30 locales
const STRINGS = {
  title: "Recherche",
  placeholder: "Rechercher…",
};

export default ((userOpts?: Partial<PagefindSearchOptions>) => {
  const PagefindSearch: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts };

    return (
      <div class={classNames(displayClass, "search")}>
        <button class="search-button" aria-label={STRINGS.title} aria-expanded="false">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
            <title>Search</title>
            <g class="search-path" fill="none">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
          <p>{STRINGS.title}</p>
        </button>
        <div class="search-container">
          <div class="search-space">
            <input
              autocomplete="off"
              class="search-bar"
              name="search"
              type="text"
              aria-label={STRINGS.placeholder}
              placeholder={STRINGS.placeholder}
            />
            <div class="search-layout" data-preview={opts.enablePreview}></div>
          </div>
        </div>
      </div>
    );
  };

  PagefindSearch.afterDOMLoaded = script;
  PagefindSearch.css = style;

  return PagefindSearch;
}) satisfies QuartzComponentConstructor;
