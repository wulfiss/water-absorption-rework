<script lang="ts">
	import {
		sealsNumber,
		percentages,
		initialWeights,
		finalWeights,
		differences,
		averageFinal
	} from '$lib/stores/store';

	import { averageCalculator } from '$lib/tools/averageCalculator';
	import { difference } from '$lib/tools/differences';
	import { finalWeight } from '$lib/tools/finalWeight';
	import { initialWeight } from '$lib/tools/initialWeight';
	import { percentageGenerator } from '$lib/tools/percentageGenerator';
	import { sealGenerator } from '$lib/tools/sealsGenerators';

	const handleCall = (
		totalProbes: number,
		averageWeight: number,
		totalFinal: number,
		userPercentage: number
	) => {
		sealsNumber.set(sealGenerator(totalProbes));
		percentages.set(percentageGenerator(userPercentage, totalFinal));
		initialWeights.set(initialWeight(averageWeight, totalProbes));
		averageFinal.set(averageCalculator($percentages, userPercentage));
		differences.set(difference($initialWeights, $percentages));
		finalWeights.set(finalWeight($initialWeights, $differences));
	};
</script>

<button on:click={() => handleCall(25, 2.5, 20, 4.5)}>click</button>

<style>
	@media print {
		button {
			display: none;
		}
	}
</style>
