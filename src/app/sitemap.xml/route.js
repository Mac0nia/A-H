import { getServerSideSitemap } from 'next-sitemap';
import { getAllPages } from '@/lib/api';

export async function GET() {
  // Get all pages from your CMS or define them manually
  const pages = [
    { url: '/', lastmod: new Date().toISOString(), changefreq: 'daily', priority: 1.0 },
    { url: '/services', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/about', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 },
    { url: '/testimonials', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.6 },
    { url: '/blog', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.7 },
  ];

  // Add dynamic routes from your CMS or API
  // Example:
  // const blogPosts = await getBlogPosts();
  // blogPosts.forEach(post => {
  //   pages.push({
  //     url: `/blog/${post.slug}`,
  //     lastmod: post.updatedAt || post.publishedAt,
  //     changefreq: 'weekly',
  //     priority: 0.7,
  //   });
  // });

  const fields = pages.map((page) => ({
    loc: page.url,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  return getServerSideSitemap(fields);
}

export async function POST() {
  return getServerSideSitemap([]);
}

export async function PUT() {
  return getServerSideSitemap([]);
}

export async function DELETE() {
  return getServerSideSitemap([]);
}

export async function PATCH() {
  return getServerSideSitemap([]);
}
