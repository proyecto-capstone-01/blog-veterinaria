import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
	const siteUrl = import.meta.env.HOSTNAME || 'http://localhost:4321';

	const sitemapUrl = `${siteUrl}/sitemap-index.xml`;

	const robotsTxtContent = `
User-agent: *
# Disallow: /example

Sitemap: ${sitemapUrl}
`;

	return new Response(robotsTxtContent.trim(), {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};