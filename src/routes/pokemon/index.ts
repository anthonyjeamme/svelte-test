export async function get({ params }) {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=2000`;
	const result = await fetch(url).then((data) => data.json());

	return {
		body: {
			pokemons: result.results
		}
	};
}
