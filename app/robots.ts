import type { MetadataRoute } from 'next'

const siteUrl = 'https://www.di-science.pp.ua'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
