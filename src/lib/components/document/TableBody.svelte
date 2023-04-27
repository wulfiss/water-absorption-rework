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
		<div class="childGroup">
			{#each $sealsNumber as seal, i}
				<div id="child{i}" class="child">
					<div>
						{#if !$sealsNumber[i]}
							----
						{:else}
							{i + 1}
						{/if}
					</div>
					<div>
						{#if !$sealsNumber[i]}
							----
						{:else}
							{seal.toFixed()}
						{/if}
					</div>
					<div>
						{#if !$initialWeights[i]}
							----
						{:else}
							{$initialWeights[i].toFixed(3)}
						{/if}
					</div>
					<div>
						{#if !$finalWeights[i]}
							----
						{:else}
							{$finalWeights[i].toFixed(3)}
						{/if}
					</div>
					<div>
						{#if !$differences[i]}
							----
						{:else}
							{$differences[i].toFixed(3)}
						{/if}
					</div>
					<div>
						{#if !$percentages[i]}
							----
						{:else}
							{$percentages[i].toFixed(2)}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
</style>
