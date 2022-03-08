
<script lang="ts">
    export let pokemons
</script>

<h1>Pokemons !</h1>

{#each pokemons as pokemon}
    <div class="pokemon">
        <a href={`/pokemon/${pokemon.name}`} sveltekit:prefetch >{pokemon.name}</a>
    </div>
{/each}

<style>
    .pokemon{
        padding: 10px;
        text-align: center;
    }
    a{
        color:black;
    }
</style>