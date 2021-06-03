<script lang="ts">
	export let name: string
	let url: string = "https://digileanfiles.blob.core.windows.net/public-assets/a3test.pdf"

	import { down } from "./services/filedownloader"

	const download = async () => {
		const file = await down(url)
		console.log(file)
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<input type="text" bind:value={url}>
	<button on:click={download}>download</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>