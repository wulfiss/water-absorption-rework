<script>
	import MainLayout from '$lib/components/document/MainLayout.svelte';
	import Form from '$lib/components/form/form.svelte';
	import { display } from '$lib/stores/store';

	const components = [Form, MainLayout];

	let active = $derived(components[$display]);

	const SvelteComponent = $derived(active);
</script>

<SvelteComponent />
