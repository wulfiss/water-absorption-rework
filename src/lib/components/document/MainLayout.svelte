<script>
	import TableBody from './components/TableBody.svelte';
	import Header from './components/Header.svelte';
	import DateTime from './components/dateTime.svelte';
	import Average from './components/average.svelte';
	import TextBox from './components/textBox.svelte';
	import Signatures from './components/signatures.svelte';
	import PrintBtn from '../Testbtn/printBtn.svelte';
</script>

<div id="pageComplete">
	<div id="btn">
		<PrintBtn />
	</div>
	<div id="outer">
		<div id="document">
			<Header />
			<DateTime />
			<TableBody />
			<Average />
			<TextBox />
			<Signatures />
		</div>
	</div>
</div>

<style lang="scss">
	* {
		box-sizing: content-box; /* 1 */
		overflow: visible; /* 2 */
	}

	div#btn {
		display: block;
		position: sticky;
		right: 1050px;
		top: 300px;
	}

	div#pageComplete {
		width: 100vw;
		width: 100dvw;
		height: 1400px;
		background-color: #ff8a65;
		display: grid;
		justify-items: center;
		align-content: center;
	}

	#document {
		font-family: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS';
		width: 210mm;
		height: 297mm;
	}

	#outer {
		background-color: white;
		height: 1240px;
		width: 880px;
		display: grid;
		justify-content: center;
		align-content: center;
	}

	@media print {
		#document {
			width: 210mm;
			height: 320mm;
			margin: 45px 35px;
		}

		#outer,
		div#pageComplete {
			display: block;
			height: auto;
		}
		div#btn {
			display: none;
		}
	}
</style>
