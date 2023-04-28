<script>
	import TableBody from './TableBody.svelte';
	import Header from './Header.svelte';
	import DateTime from './dateTime.svelte';
	import Average from './average.svelte';
</script>

<div id="document">
	<Header />
	<DateTime />
	<TableBody />
	<Average />
</div>

<style lang="scss">
	* {
		box-sizing: content-box; /* 1 */
		height: 0; /* 1 */
		overflow: visible; /* 2 */
	}

	#document {
		font-family: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS';
		width: 210mm;
		height: 297mm;
		margin: 30mm 45mm 30mm 45mm;
	}

	@media print {
		#document {
			width: 210mm;
			height: 297mm;
			margin: 30mm 45mm 30mm 45mm;
		}
	}
</style>
