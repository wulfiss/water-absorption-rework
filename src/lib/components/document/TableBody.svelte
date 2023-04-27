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
		<div class="cells">N° Pollo</div>
		<div class="cells">Precinto</div>
		<div class="cells">Peso Inicial</div>
		<div class="cells">Peso Final</div>
		<div class="cells">Diferencia</div>
		<div class="cells">Hidratación</div>
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
						<div class="cells">{$percentages[i].toFixed(3)}</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	div.tableBody {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
	}

	div.sealsGroup {
		display: grid;
		grid-column-start: 1;
		grid-column-end: 2;
		justify-items: center;
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
	}

	div.child {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		justify-items: center;
	}
</style>
