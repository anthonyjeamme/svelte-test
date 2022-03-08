<script lang="ts">
    import {v4 as uuid} from '@lukeed/uuid'
    import RichEditorToolBar from "./RichEditorToolBar.svelte";

    let isFocus = false

    let blocks = [
        {
            id: uuid(),
            type:'p',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }, {
            id: uuid(),
            type:'p',
            content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        }
    ]
</script>

<div class="root" data-id="root">
    {#if isFocus}
        <RichEditorToolBar handleAction={data => {
            const selection = window.getSelection()
            
            if(selection.rangeCount){
                const range = selection.getRangeAt(0)
                console.log(range.commonAncestorContainer.parentNode.dataset.id)
            }
            
        }} />
    {/if}
    <div
        data-id="root"
        contenteditable
        class={`editor${isFocus?" focus":""}`}
        on:focus={()=>{
            isFocus = true
        }}
        on:blur={()=>{
            isFocus = false
        }}
    >
        {#each blocks as block}
            <p  
                data-id={block.id}
                on:keydown={(e)=>{
                    if(e.key==="Enter"){
                        blocks = [...blocks, {id: uuid(), type:"p", content:"nouveau"}]
                    }
                }}
                on:input={(e)=>{
                    // @ts-ignore
                    block.content = e.target.innerText
                }}>
                {block.content}
            </p>
        {/each}
    </div>

    <button on:click={()=>{
        console.log(blocks)
    }}>
        Test
    </button>
</div>

<style lang="scss">
.root{
    position: relative;
    margin: 20px 0;
}

.editor{
    outline: none;
    border: 1px dashed rgba(#133547,0.1);
    padding: 10px;
    margin-bottom: 20px;
    transition: border-color 250ms, background-color 250ms;
    border-radius: 4px;

    &:hover{
        border-color: rgba(#133547,0.2);
    }

    &.focus{
        border-color: rgba(#133547,0.4);
        background-color: rgba(white, 0.5);
    }
}

</style>