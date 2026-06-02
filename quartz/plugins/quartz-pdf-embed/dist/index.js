// dist/index.js — version compilée de PdfEmbed pour Quartz v5
// Généré depuis src/index.ts

const PdfEmbed = (opts) => {
  const height = opts?.height ?? "800px"
  const width = opts?.width ?? "100%"

  return {
    name: "PdfEmbed",

    textTransform(_ctx, src) {
      return src.toString().replace(
        /!\[\[([^\]]+\.pdf)(?:\|([^\]]*))?\]\]/gi,
        (_match, filename, altText) => {
          const label = (altText && altText.trim()) || filename
          const pdfPath = filename.startsWith("/") ? filename : `/${filename}`

          return `<figure class="pdf-embed">
  <iframe
    src="${pdfPath}"
    width="${width}"
    height="${height}"
    style="border:none;border-radius:6px;display:block;">
  </iframe>
  <figcaption>
    <a href="${pdfPath}" target="_blank" rel="noopener">
      📄 ${label}
    </a>
  </figcaption>
</figure>`
        },
      )
    },

    externalResources() {
      return {
        css: [
          {
            content: `
.pdf-embed {
  margin: 1.5rem 0;
  padding: 0;
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  overflow: hidden;
}
.pdf-embed iframe {
  width: 100%;
  display: block;
  background: var(--light);
}
.pdf-embed figcaption {
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  border-top: 1px solid var(--lightgray);
  background: var(--light);
}
.pdf-embed figcaption a {
  color: var(--secondary);
  text-decoration: none;
}
.pdf-embed figcaption a:hover {
  text-decoration: underline;
}
`,
          },
        ],
      }
    },
  }
}

exports.PdfEmbed = PdfEmbed
