(function() {
  function patchPdfLinks() {
    document.querySelectorAll('a[href$=".pdf"]').forEach(function(link) {
      link.setAttribute("data-no-prefetch", "true");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", patchPdfLinks);
  } else {
    patchPdfLinks();
  }

  document.addEventListener("nav", patchPdfLinks);
})();
