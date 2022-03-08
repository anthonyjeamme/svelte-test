import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sass: true
	}),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		prerender: {
			crawl: true,
			enabled: true,
			default: true,
			entries: [
				'/pokemon/bulbasaur',
				'/pokemon/ivysaur',
				'/pokemon/venusaur',
				'/pokemon/charmander',
				'/pokemon/charmeleon',
				'/pokemon/charizard',
				'/pokemon/squirtle',
				'/pokemon/wartortle',
				'/pokemon/blastoise',
				'/pokemon/caterpie',
				'/pokemon/metapod',
				'/pokemon/butterfree',
				'/pokemon/weedle',
				'/pokemon/kakuna',
				'/pokemon/beedrill',
				'/pokemon/pidgey',
				'/pokemon/pidgeotto',
				'/pokemon/pidgeot',
				'/pokemon/rattata',
				'/pokemon/raticate'
			]
		}
	}
};

export default config;
