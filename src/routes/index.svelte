<script lang="ts">
	import { v4 as uuid, v4 } from '@lukeed/uuid';
	import { browser } from "$app/env"

	const getCachedDocument = () => {

		if(!browser) return []

		const data = localStorage.getItem('document')

		if(!data) return null

		return JSON.parse(data)
	}

	import Section from '$lib/Section/Section.svelte'

	const sectionDefinitions = [{
		name: 'header',
		getComponent: async () => (await import( '$lib/Sections/HeaderSection/HeaderSection.svelte')).default,
	},{
		name: "body",
		getComponent: async () => (await import( '$lib/Sections/BodySection/BodySection.svelte')).default,
	}]

	let sections = getCachedDocument() || [
		{
			id: uuid(),
			name: "header",
			data:{
				title:"HEADER TITLE"
			}
		},{
			id: uuid(),
			name:"body",
			data:{
				title:"BODY TITLE"
			}
		}
	]

	$: {
		if(browser){
			console.log("Save")
			localStorage.setItem('document', JSON.stringify(sections))
		}
	}

	const getSectionDefinition = (name:string) => {
		const definition = sectionDefinitions.find(sectionDefinition => sectionDefinition.name === name)
		return definition
	}
</script>

<div class="root">		
	{#each sections as section, index}
	<div class="section">
		<Section definition={getSectionDefinition(section.name)}
			section={section} 
			handleRemove={()=>{
				sections = sections.filter(({id}) => id!==section.id)
			}}
			handleAddBefore={()=>{
				sections = [
					...sections.slice(0,index),
					{			
						id: uuid(),
						name: "header",
						data:{
							title:"NOUVEAU !"
						}
					},
					...sections.slice(index),
				]
			}}
			handleAddAfter={()=>{
					sections = [
					...sections.slice(0,index+1),
					{			
						id: uuid(),
						name: "header",
						data:{
							title:"NOUVEAU !"
						}
					},
					...sections.slice(index+1),
				]

			}}
		/>
	</div>
	{/each}

	<button on:click={()=>{
		localStorage.setItem('document', JSON.stringify(sections))
	}}>PRINT</button>

</div>

<style>
	
	.root{
		padding: 40px 0;
	}


	h1 {
		width: 100%;
		font-family: var(--font-sans);
	}

	.section{
		text-align: center;
	}
</style>
