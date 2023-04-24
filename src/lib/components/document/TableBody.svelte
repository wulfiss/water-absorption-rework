<script lang="ts">
	import {
		sealsNumber,
		percentages,
		initialWeights,
		finalWeights,
		differences,
		averageFinal
	} from '$lib/stores/store';
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
	{#each $sealsNumber as seal, i}
		<div id="child" data-id={i}>
			<div class="cells">{i + 1}</div>
			<div class="cells">{seal}</div>
			{#if !$initialWeights[i]}
				<div class="cells">{'----'}</div>
			{:else}
				<div class="cells">{$initialWeights[i].toFixed(3)}</div>
			{/if}
			{#if !$finalWeights[i]}
				<div class="cells">{'----'}</div>
			{:else}
				<div class="cells">{$finalWeights[i].toFixed(3)}</div>
			{/if}
			{#if !$differences[i]}
				<div class="cells">{'----'}</div>
			{:else}
				<div class="cells">{$differences[i].toFixed(3)}</div>
			{/if}
			{#if !$percentages[i]}
				<div class="cells">{'----'}</div>
			{:else}
				<div class="cells">{$percentages[i].toFixed(3)}</div>
			{/if}
		</div>
	{/each}
	<div>
		{#if !$averageFinal}
			<div>average: {'----'}</div>
		{:else}
			<div>average: {$averageFinal.toFixed(2)}</div>
		{/if}
	</div>
</div>

<style>
	div#main {
	}

	div#child,
	div#header {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		justify-items: center;
	}
</style>
