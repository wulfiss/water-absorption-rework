<script>
	import '$lib/normalize.css';
	import { textStore } from '$lib/stores/textStore';
	import logouaa from '$lib/images/logouaa.jpg';
	import logoenercop from '$lib/images/logoenercop.jpg';
</script>

<div id="mainHeader">
	<div id="left" class="childs">
		<img src={$textStore['enercop'].logoBrand} alt="Brand logo" srcset="" />
		<div>{$textStore['enercop'].brandTitle}</div>
		<div>{$textStore['enercop'].brandSubTitle}</div>
	</div>

	<div id="center">
		<div id="up">
			<div>{$textStore['enercop'].officialName}</div>
			<div>{$textStore['enercop'].companyName}</div>
			<img src={$textStore['enercop'].companyLogo} alt="company logo" srcset="" />
		</div>
		<div id="down">{$textStore['enercop'].documentTitle}</div>
	</div>

	<div id="right" class="childs">
		<div>{$textStore['enercop'].documentCode}</div>
		<div>Vigencia: {$textStore['enercop'].documentValidity}</div>
		<div>Revisión: {$textStore['enercop'].documentRevision}</div>
		<div>Página {$textStore['enercop'].documentPages}</div>
	</div>
</div>

<style lang="scss">
	:root {
		--border: 1px solid black;
	}

	div#mainHeader {
		display: grid;
		height: 80px;
		width: 648px;
		grid-template-columns: repeat(5, 1fr);
		font-size: 12px;
		font-weight: bold;
	}

	div#center {
		grid-column-start: 2;
		grid-column-end: 5;
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		border: var(--border);

		#up {
			grid-row-start: 1;
			grid-row-end: 4;
			border: 0;
			display: grid;
			grid-template-rows: 4px, 4px, 10px;

			div,
			img {
				border: 0;
				margin: auto;
			}
		}

		#down {
			display: grid;
			justify-content: center;
			border-top: var(--border);
		}

		div#up:nth-child(1),
		#down {
			padding-top: 3px;
		}
	}

	div#left {
		display: grid;
		align-items: center;
		justify-items: center;
		padding-bottom: 3px;
		border: var(--border);
		border-right: 0;

		img {
			width: 81.25px;
			height: 45.35px;
			padding-top: 3px;
		}

		:nth-child(3) {
			font-size: 10px;
		}
	}

	div#right {
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		padding: 5px;
		align-items: center;
		border: var(--border);
		border-left: 0;
	}
</style>
