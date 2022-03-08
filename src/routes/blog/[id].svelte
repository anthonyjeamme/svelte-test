<script lang="ts">
import { getStores } from "$app/stores";
    export let params

    getStores().page.subscribe((a)=>{
        params = a.params
    })


    $: console.log(params)


</script>

<svelte:head>
    <title>{params.id}</title>
</svelte:head>

<h1>{params.id}</h1>