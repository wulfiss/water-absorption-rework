<script lang="ts">
	import { textStore } from '$lib/stores/textStore';
	import { brandID } from '$lib/stores/store';
	import logouaa from '$lib/images/logouaa.jpg';
	import logoenercop from '$lib/images/logoenercop.jpg';
	import logoPiugusto from '$lib/images/logoPiugusto.jpg';

	interface ImgArr {
		[brandID: number]: {
			companyLogo: string;
			brandLogo: string;
		};
	}

	const imgArr: ImgArr = {
		0: {
			companyLogo: logouaa,
			brandLogo: logoenercop
		},
		1: {
			companyLogo: logouaa,
			brandLogo: logoenercop
		},
		2: {
			companyLogo: logouaa,
			brandLogo: logoPiugusto
		}
	};
</script>

<div id="mainHeader">
	<div id="left" class="childs">
		<img src={imgArr[$brandID].brandLogo} alt="Brand logo" srcset="" />
		<div>{$textStore[$brandID].brandSubTitle}</div>
	</div>

	<div id="center">
		<div id="up">
			<div>{$textStore[$brandID].officialName}</div>
			<div>{$textStore[$brandID].companyName}</div>
			<img src={imgArr[$brandID].companyLogo} alt="company logo" srcset="" />
		</div>
		<div id="down">{$textStore[$brandID].documentTitle}</div>
	</div>

	<div id="right" class="childs">
		<div>{$textStore[$brandID].documentCode}</div>
		<div>Vigencia: {$textStore[$brandID].documentValidity}</div>
		<div>Revisión: {$textStore[$brandID].documentRevision}</div>
		<div>Página {$textStore[$brandID].documentPages}</div>
	</div>
</div>

<style lang="scss">
	$border: 1px solid black;

	div#mainHeader {
		display: grid;
		height: 90px;
		width: 755px;
		grid-template-columns: repeat(5, 1fr);
		font-size: 15px;
		font-weight: bold;
	}

	div#center {
		grid-column-start: 2;
		grid-column-end: 5;
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		border: $border;

		#up {
			grid-row-start: 1;
			grid-row-end: 4;
			border: 0;
			display: grid;
			grid-template-rows: 4px, 4px, 10px;

			img {
				height: 40px;
				border: 0;
				margin: auto;
			}

			div {
				height: 20px;
				border: 0;
				margin: auto;
			}
		}

		#down {
			display: grid;
			justify-content: center;
			border-top: $border;
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
		padding-bottom: 0px;
		border: $border;
		border-right: 0;

		img {
			width: 125px;
			height: 60px;
			padding-top: 5px;
		}

		:nth-child(2) {
			font-size: 12px;
		}
	}

	div#right {
		display: grid;
		grid-template-rows: repeat(4, 1fr);
		padding: 5px;
		align-items: center;
		border: $border;
		border-left: 0;
	}
</style>
