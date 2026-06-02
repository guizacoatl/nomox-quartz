interface Options {
  /** Hauteur de l'iframe PDF. Défaut : "800px" */
  height?: string
  /** Largeur de l'iframe PDF. Défaut : "100%" */
  width?: string
}

export declare const PdfEmbed: (opts?: Options) => {
  name: string
  textTransform: (_ctx: unknown, src: string) => string
  externalResources: () => { css: Array<{ content: string }> }
}
