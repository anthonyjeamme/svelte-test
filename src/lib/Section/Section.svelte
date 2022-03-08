<script lang="ts">
    import { onMount } from 'svelte';

    const editionMode = true
    let mouseIn = false

    let SectionEdition = null
    let Component

    export let definition, section, handleAddAfter, handleAddBefore, handleRemove

    onMount(async ()=>{

        Component = await definition.getComponent()

        if(editionMode){
            SectionEdition = (await import('./SectionEdition/SectionEdition.svelte')).default
        }
    })

</script>

<section
    on:mouseleave={()=>{
        mouseIn = false
    }}
    on:mouseenter={()=>{
        mouseIn = true
    }}
    
>
    {#if SectionEdition!==null && mouseIn}
        <svelte:component this={SectionEdition}
            handleAddAfter={handleAddAfter}
            handleAddBefore={handleAddBefore}
            handleRemove={handleRemove}
            />
    {/if}
    <svelte:component this={Component} data={section.data}/>
</section>

<style>

    section{
        position: relative;
    }

</style>