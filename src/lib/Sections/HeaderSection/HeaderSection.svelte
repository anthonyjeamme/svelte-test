<script lang="ts">
import RichEditor from "$lib/RichEditor/RichEditor.svelte";
    export let data
</script>

<div class="root">
    <input bind:value={data.title}>

    <div class="editor">
        
        <RichEditor />
    </div>
</div>

<style>
    .root{
        padding: 40px;
    }
    .editor{
        width: 800px;
        margin: 0 auto;
    }
</style>