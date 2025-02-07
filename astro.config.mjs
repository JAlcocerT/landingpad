import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
	server: {
		host: '0.0.0.0', // Listen on all network interfaces (for local network access)
		// OR
		// host: true,      // Listen on all network interfaces (simpler alternative)
		// OR
		// host: 'your_server_ip_address', // Replace with your server's actual IP (less common)
		port: 4321,      // Optional: Specify the port (if you want something other than the default 4321)
	  },
	site: "https://jalcocert.github.io/landingpad/",
	adapter: netlify({
		imageCDN: false,
	}),
	redirects: {
		"/admin": "/keystatic",
	},
	integrations: [
		react(),
		keystatic(),
		tailwind(),
		sitemap(),
		compress({
			HTML: true,
			JavaScript: true,
			CSS: true,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}),
	],
});
