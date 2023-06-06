<script>
	import MainLayout from '$lib/components/document/MainLayout.svelte';
	import Form from '$lib/components/form/form.svelte';
	import { display } from '$lib/stores/store';

	const components = [Form, MainLayout];

	$: active = components[$display];
</script>

<svelte:component this={active} />
