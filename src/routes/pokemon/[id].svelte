<script lang="ts">
    export let pokemon
</script>


<svelte:head>
    <link rel="preload" as="image" href={pokemon.sprites.front_default} />
    <title>{pokemon.name}</title>
    <meta content={`Pokemon ${pokemon.name}`} property="og:title" />
    <meta content={pokemon.sprites.front_default} property="og:image" />

</svelte:head>



<h1>{pokemon.name}</h1>

<div>
    

<img src={pokemon.sprites.front_default} alt="" height={96*3}/>
</div>

<style>

    div{
        display: flex;
        justify-content: center;
    }

    img{
        margin: auto;
        image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
        image-rendering: -moz-crisp-edges;          /* Firefox                        */
        image-rendering: -o-crisp-edges;            /* Opera                          */
        image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
        image-rendering: pixelated; /* Chrome */
        image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
        -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */
    }
</style>