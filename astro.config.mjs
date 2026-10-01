import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://osix.tech',
  output: 'static',
  trailingSlash: 'always',
  // Keep whitespace between inline elements: copy like "<span>pymes</span> <span>en España</span>"
  // must not collapse into "pymesen España" for crawlers that read textContent.
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  fonts: [
    {
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
      weights: ['200 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
