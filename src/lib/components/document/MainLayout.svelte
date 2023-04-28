<script>
	import TableBody from './components/TableBody.svelte';
	import Header from './components/Header.svelte';
	import DateTime from './components/dateTime.svelte';
	import Average from './components/average.svelte';
	import TextBox from './components/textBox.svelte';
	import Signatures from './components/signatures.svelte';
</script>

<div id="document">
	<Header />
	<DateTime />
	<TableBody />
	<Average />
	<TextBox />
	<Signatures />
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
		margin: 45px 35px;
	}

	@media print {
		#document {
			width: 210mm;
			height: 297mm;
			margin: 45px 35px;
		}
	}
</style>
