<script lang="ts">

    export let data

</script>

<div class="root">
    
    <input bind:value={data.title}>
</div>

<style>
    .root{
        background-color: #ffffff;
        padding: 40px;
    }
</style>