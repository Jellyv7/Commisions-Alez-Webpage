import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
	routing: {
		prefixDefaultLocale: false
	}
  }
});