<script lang="ts">
	import { averageFinal } from '$lib/stores/store';
</script>

<div id="main">
	<div id="box">
		<div>Hidratación Promedio</div>
		<div>{$averageFinal.toFixed(2)} %</div>
	</div>
</div>

<style lang="scss">
	div#main {
		height: 100px;
		width: 755px;
		font-weight: bold;
		font-size: 17px;
		display: grid;
		justify-content: center;
	}

	div#box {
		display: grid;
		width: 250px;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		text-align: center;

		div {
			border: 1px solid black;
			height: 40px;
		}

		:last-child {
			border-left: 0;
			display: grid;
			align-content: center;
		}
	}
</style>
