<script lang="ts">
    import TextBolder from 'phosphor-svelte/lib/TextBolder'
    import TextItalic from 'phosphor-svelte/lib/TextItalic'
    import TextUnderline from 'phosphor-svelte/lib/TextUnderline'
    import TextH from 'phosphor-svelte/lib/TextH'

    export let handleAction

    const tools = [
        {
            icon: TextBolder,
            data:{
                type:"b"
            }
        },  {
            icon: TextItalic,
            data:{
                type:"i"
            }
        },  {
            icon: TextUnderline,
            data:{
                type:"u"
            }
        },  {
            icon: TextH,
            data:{
                type:"h"
            }
        }
    ]

</script>

<div class="RichEditorToolbar">
    {#each tools as tool}
        <button
            on:mousedown={e=>{
                e.preventDefault()
            }}
        on:click={()=>{
            handleAction(tool.data)
        }}>
            <svelte:component this={tool.icon}/>
        </button>
    {/each}
   
</div>

<style lang="scss">
    .RichEditorToolbar{
        position: absolute;
        background-color: white;
        border-radius: 4px;
        bottom: calc(100% + 4px);
        padding: 4px;
        display: flex;
        gap:4px;
        border: 1px solid rgba(#133547,0.1);
        @keyframes RichEditorToolbarEntry{
            from{
                transform: translateY(-4px);
                opacity: 0;
            }
            50%{
                opacity: 1;
            }
            to{
                transform: none;
            }
        }


        animation: RichEditorToolbarEntry 400ms;

        &>button{
            height: 40px;
            width: 40px;
            border:0;
            border-radius: 4px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 250ms;

            &:hover{
                background-color: #f6f8fc;
            }
        }
    }
</style>