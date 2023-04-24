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
	<div>
		Amount
		{#each $sealsNumber as seal, i}
			<div>{i + 1}</div>
		{/each}
	</div>
	<div>
		seals
		{#each $sealsNumber as seal}
			<div>{seal}</div>
		{/each}
	</div>
	<div>
		initial
		{#each $initialWeights as initial}
			<div>{initial.toFixed(3)}</div>
		{/each}
	</div>
	<div>
		final
		{#each $finalWeights as final}
			<div>{final.toFixed(3)}</div>
		{/each}
	</div>
	<div>
		difference
		{#each $differences as difference}
			<div>{difference.toFixed(3)}</div>
		{/each}
	</div>
	<div>
		percentages
		{#each $percentages as percentage}
			<div>{percentage.toFixed(2)}</div>
		{/each}
	</div>
</div>
<div>
	average: {$averageFinal.toFixed(2)}
</div>

<style>
	div#main {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
</style>
