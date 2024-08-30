import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Izabella | Blog',
    description: 'Building my site',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.md')),
    customData: `<language>en-us</language>`,
  });
}