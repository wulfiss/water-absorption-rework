<script>
	import TableBody from '$lib/components/document/TableBody.svelte';
</script>

<TableBody />

<style lang="scss">
	@page {
		size: A4;
		margin: 0;
	}

	@media print {
		html,
		body {
			width: 210mm;
			height: 297mm;
		}
	}
</style>
