import type { MetadataRoute } from "next"
import { SITE_NAME, SITE_DESCRIPTION } from "@/config/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/logo/logo.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  }
}
