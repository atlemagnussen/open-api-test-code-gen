<script lang="ts">
	import {onMount} from "svelte"
	export let name: string
	let tabbarEl
	let activeIndex = 0
	onMount(async () => {
        tabbarEl.addEventListener("MDCTabBar:activated", (e) => {
            activeIndex = e.detail.index
        })
    })
</script>

<style>
	
</style>
<main>
	<h1>Hello {name}</h1>
	<mwc-tab-bar bind:this={tabbarEl}>
		<mwc-tab label="Info" icon="info" stacked></mwc-tab>
		<mwc-tab label="Products" icon="inventory_2" stacked></mwc-tab>
		<mwc-tab label="Links" icon="link" stacked></mwc-tab>
	</mwc-tab-bar>
	{#if activeIndex == 1}
		<p>Products</p>
	{:else if activeIndex == 2}
		<p>Links</p>
	{:else}
		<p>Info</p>
	{/if}
</main>
