<script lang="ts">
    let blocks =[
        {
            type:'p',
            content:'hello'
        }
    ]
</script>

<div class="root" contenteditable>

    {#each blocks as block}
        <div  
            on:keydown={(e)=>{
                if(e.key==="Enter"){
                    blocks = [...blocks, {type:"p", content:"nouveau"}]
                }
            }}
        on:input={(e)=>{
            block.content = e.target.innerText
        }}>
            {block.content}
        </div>
    {/each}

    <button on:click={()=>{
        console.log(blocks)
    }}>Test</button>
</div>

<style>

.root{
    border: 2px dashed black;
    margin: 20px 0;
    padding: 10px;
    outline: none;
}

</style>