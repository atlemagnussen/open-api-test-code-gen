import "@material/mwc-tab-bar"
import "@material/mwc-tab"

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;