<script context="module">
	// export const prerender = true;
</script>

<script lang="ts">

    import AddSectionLine from './AddSectionLine/AddSectionLine.svelte'
    import Trash from 'phosphor-svelte/lib/Trash'

    export let  handleAddBefore, handleAddAfter, handleRemove

</script>

    <AddSectionLine handleAdd={handleAddBefore} position="top"/>
    <AddSectionLine handleAdd={handleAddAfter} position="bottom"/>

<div class="menu">
    <button on:click={handleRemove}>
        <Trash />
    </button>
</div>


<style lang="scss">
  
    .menu{
        position: absolute;
        top:10px;
        right: 10px;
        z-index: 10;

        &>button{
            height: 36px;
            width: 36px;
            border-radius: 36px;
            background-color: white;
            border: 1px solid rgba(#133547,0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            transition: border-color 250ms;
            
            &:hover{
                border-color: rgba(#133547,0.2);
            }
        }
    }
</style>