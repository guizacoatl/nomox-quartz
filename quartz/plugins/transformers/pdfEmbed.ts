import { QuartzTransformerPlugin } from "../types"

export const PdfEmbed: QuartzTransformerPlugin = () => ({
  name: "PdfEmbed",
  textTransform(_ctx, src) {
    return src.toString().replace(
      /!\[\[([^\]]+\.pdf)(?:\|[^\]]*)?\]\]/gi,
      (_match, filename) =>
        `<iframe src="/${filename}" width="100%" height="800px" style="border:none;border-radius:8px;"></iframe>`
    )
  },
})