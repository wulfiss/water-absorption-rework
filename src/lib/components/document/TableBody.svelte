<script lang="ts">
	import {
		sealsNumber,
		percentages,
		initialWeights,
		finalWeights,
		differences
	} from '$lib/stores/store';
	import { swapContent } from '$lib/tools/swapElements';
</script>

<div id="main">
	<div id="header">
		<div class="cells">N° de Pollos</div>
		<div class="cells">N° de Precinto</div>
		<div class="cells">Peso Inicial(kg)</div>
		<div class="cells">Peso Final(kg)</div>
		<div class="cells">Diferencia(kg)</div>
		<div class="cells">% Hidratación</div>
	</div>
	<div class="tableBody">
		<div class="sealsGroup">
			{#each $sealsNumber as seal, i}
				<div class="seals">{i + 1}</div>
			{/each}
		</div>
		<div class="childGroup">
			{#each $sealsNumber as seal, i}
				<div id="child{i}" class="child">
					<div class="cells">{seal.toFixed()}</div>

					{#if !$initialWeights[i]}
						<div class="cells">----</div>
					{:else}
						<div class="cells">{$initialWeights[i].toFixed(3)}</div>
					{/if}

					{#if !$finalWeights[i]}
						<div class="cells">----</div>
					{:else}
						<div class="cells">{$finalWeights[i].toFixed(3)}</div>
					{/if}

					{#if !$differences[i]}
						<div class="cells">----</div>
					{:else}
						<div class="cells">{$differences[i].toFixed(3)}</div>
					{/if}

					{#if !$percentages[i]}
						<div class="cells">----</div>
					{:else}
						<div class="cells">{$percentages[i].toFixed(2)}</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	%cells {
		border: 1px solid black;
		width: 100%;
		height: 100%;
		text-align: center;
	}
	div.tableBody {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}

	div.sealsGroup {
		display: grid;
		grid-column-start: 1;
		grid-column-end: 2;
		justify-items: center;
		border: 1px solid black;
		width: 100%;
		margin-left: -1px;
		margin-top: -1px;
		padding: 0;

		.seals {
			height: 19.11px;
			@extend %cells;
			border-left: 0;
			border-top: 0;
			border-right: 0;
		}
		:last-child {
			margin-bottom: 0px;
			border-bottom: 0;
		}

		:first-child {
			border-top: 0;
		}
	}

	div.childGroup {
		display: grid;
		grid-column-start: 2;
		grid-column-end: 7;
	}

	div#header {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		justify-items: center;
		border-top: 1px solid black;
		font-weight: bold;

		:first-child {
			border-bottom: 0;
			border-left: 1px solid black;
			height: 20.89px;
		}
	}

	div.child {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		justify-items: center;
	}

	div#main {
		width: 648px;
		font-size: 15px;
	}

	div.cells {
		@extend %cells;
		border-top: 0;
		border-left: 0;
	}
</style>
