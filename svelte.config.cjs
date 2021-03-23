const sveltePreprocess = require('svelte-preprocess');
/** @type {import('@sveltejs/kit').Config} */

const { join } = require('path');
const { readFileSync } = require('fs');
const { cwd } = require( 'process');

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

/** @type {import('vite').UserConfig} */

module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: "postcss",
			},
			postcss: true
		}),
	],
	kit: {
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    },
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: '@sveltejs/adapter-static',

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
