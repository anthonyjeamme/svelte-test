<script lang="ts">

    import Plus from 'phosphor-svelte/lib/Plus'
    import TextH from 'phosphor-svelte/lib/TextH'
    export let handleAdd, position

    let isOpen=false
</script>

<div class={`addLine position-${position}`}>
    <button on:click={()=>{
        isOpen = !isOpen
    }} class={isOpen?"rotate":""}>
        <Plus />
    </button>

    {#if isOpen}
        <div class="section-picker">
            <button on:click={handleAdd}>
                <TextH />
                <span>Titre</span>
            </button>
            <button on:click={handleAdd}>
                <TextH />
                <span>Titre</span>
            </button>
            <button on:click={handleAdd}>
                <TextH />
                <span>Titre</span>
            </button>
            <button on:click={handleAdd}>
                <TextH />
                <span>Titre</span>
            </button>
            <button on:click={handleAdd}>
                <TextH />
                <span>Titre</span>
            </button>
            <button on:click={handleAdd}>
                <TextH />
                <span>Titre</span>
            </button>
        </div>
    {/if}
</div>

<style lang="scss">
  .addLine{
        position: absolute;
        left:0;
        right: 0;
        display: flex;

        &::after{
            content:"";
            width: 400px;
            height: 2px;
            top: calc(50% - 1px);
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            background-image: linear-gradient(90deg,rgba(19,53,71,0) 0,rgba(19,53,71,.075) 30%,rgba(19,53,71,.075) 70%,rgba(19,53,71,0));    
            opacity: 0.6;
            transition: opacity 250ms;
        }

        &.position-top{
            top:-15px;
        }
        
        &.position-bottom{
            bottom:-15px;
        }

        &>button{
            position: relative;
            z-index: 10;
            height: 30px;
            width: 30px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin:auto;
            border: 1px solid rgba(#133547,0.2);
            background-color: #f6f8fc;
            transition: transform 250ms;    
            opacity: 0.6;
            transition: opacity 250ms, transform 250ms;

            &.rotate{
                transform: rotate(45deg);
            }
        }
        
        &:hover{
            &::after{            
                opacity: 1;
            }
            button{
                opacity: 1;
            }
        }

        .section-picker{
            background-color: white;
            padding: 10px;
            border-radius: 4px;
            position: absolute;
            box-shadow: 0 0 10px rgba(#133547,0.05);
            left: 50%;
            top: calc(10px + 100%);
            z-index: 100;
            transform: translateX(-50%);
            font-weight: 400;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            @keyframes sectionPickerEntry {
                from{
                    transform: translateX(-50%)  translateY(10px);
                    opacity: 0;
                }
                50%{
                    opacity: 1;
                }
                to{
                    transform:  translateX(-50%);
                }
            }

            animation: sectionPickerEntry 400ms;

            &>button{
                width: 150px;
                padding: 10px;
                border:0;
                background-color: transparent;
                transition: background-color 250ms;
                display: flex;
                align-items: center;
                height: 40px;

                &:hover{
                    background-color :#f6f8fc;
                }

                &>span{
                    margin-left: 6px;
                }
            }
        }
    }

</style>