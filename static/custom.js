document.addEventListener("DOMContentLoaded", () => {
  // Désactive le prefetch sur tous les liens vers des PDFs
  document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
    link.setAttribute("data-no-prefetch", "true")
    link.setAttribute("target", "_blank")
    link.setAttribute("rel", "noopener noreferrer")
  })
})

// Quartz recharge les liens à chaque navigation SPA — on ré-applique à chaque fois
document.addEventListener("nav", () => {
  document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
    link.setAttribute("data-no-prefetch", "true")
    link.setAttribute("target", "_blank")
    link.setAttribute("rel", "noopener noreferrer")
  })
})