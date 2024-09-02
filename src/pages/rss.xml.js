import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Izabella | Writing',
    description: 'Building my site',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./writing/*.md')),
    customData: `<language>en-us</language>`,
  });
}