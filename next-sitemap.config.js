/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ah-electrical.co.uk',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://ah-electrical.co.uk/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  generateIndexSitemap: true,
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  // Add any additional configuration options here
};
