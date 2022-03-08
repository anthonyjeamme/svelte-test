export async function get({ params }) {
	const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;

	const pokemon = await fetch(url).then((data) => data.json());

	return {
		body: {
			pokemon
		}
	};
}
