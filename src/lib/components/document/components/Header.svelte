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
		<img src={imgArr[$brandID].companyLogo} alt="Brand logo" srcset="" />
		<div>{$textStore[$brandID].officialName}</div>
		<div class="textCompany">{$textStore[$brandID].companyName}</div>
	</div>

	<div id="center">
		<div class="title">{$textStore[$brandID].documentTitle}</div>
	</div>

	<div id="right" class="childs">
		<div>Código: {$textStore[$brandID].documentCode}</div>
		<div>Vigencia: {$textStore[$brandID].documentValidity}</div>
		<div>Revisión: {$textStore[$brandID].documentRevision}</div>
		<div>Página {$textStore[$brandID].documentPages}</div>
	</div>
</div>

<style lang="scss">
	div.title{
		font-size: 15px;
	}
	$border: 1px solid black;
	
	div.textCompany{
		font-size: 10px;
	}

	div#mainHeader {
		display: grid;
		height: 90px;
		width: 755px;
		grid-template-columns: repeat(12, 1fr);
		font-size: 15px;
		font-weight: bold;
	}

	div#center {
		grid-column-start: 4;
		grid-column-end: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		border: $border;
	}

	div#left {
		display: grid;
		grid-column-start: 1;
		grid-column-end: 4;
		align-items: center;
		justify-items: center;
		padding-bottom: 4px;
		border: $border;
		border-right: 0;

		img {
			width: 125px;
			height: 65px;
			padding-top: 2px;
		}

		:nth-child(2) {
			font-size: 12px;
		}
	}

	div#right {
		display: grid;
		grid-column-start: 10;
		grid-column-end: 13;
		grid-template-rows: repeat(4, 1fr);
		padding: 5px 5px 5px 8px;
		align-items: center;
		border: $border;
		border-left: 0;
	}
</style>
