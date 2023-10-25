<script lang="ts">
	import Button, { Label } from '@smui/button';
	import {
		sealsNumber,
		percentages,
		initialWeights,
		finalWeights,
		differences,
		averageFinal,
		time,
		date,
		observation,
		display,
		brandID
	} from '$lib/stores/store';

	import { averageCalculator } from '$lib/tools/averageCalculator';
	import { difference } from '$lib/tools/differences';
	import { finalWeight } from '$lib/tools/finalWeight';
	import { initialWeight } from '$lib/tools/initialWeight';
	import { percentageGenerator } from '$lib/tools/percentageGenerator';
	import { sealGenerator } from '$lib/tools/sealsGenerators';
	import { swapContent } from '$lib/tools/swapElements';
	import { timeGenerator } from '$lib/tools/timeGenerator';
	import { reverseDate } from '$lib/tools/reverseDate';
	import { variableStore } from '$lib/stores/variableStore';

	export let userProbes: number;
	export let userAverage: number;
	export let userTotal: number;
	export let userUserPercentage: number;
	export let swap: boolean;
	export let userDate: string;
	export let timeUser: string;
	export let userObs: string;
	export let selectedId: number;

	const handleCall = async (
		totalProbes: number,
		averageWeight: number,
		totalFinal: number,
		userPercentage: number,
		swap: boolean,
		timeUser: string,
		userDate: string,
		userObs: string,
		selectedId: number
	) => {
		display.set(1);
		time.set(timeGenerator(timeUser));
		date.set(reverseDate(userDate));
		sealsNumber.set(sealGenerator($variableStore[selectedId].userTotalProbes));
		percentages.set(
			percentageGenerator(
				$variableStore[selectedId].percentage,
				$variableStore[selectedId].userTotalProbes
			)
		);
		initialWeights.set(initialWeight(averageWeight, $variableStore[selectedId].userTotalProbes));
		averageFinal.set(averageCalculator($percentages, $variableStore[selectedId].percentage));
		differences.set(difference($initialWeights, $percentages));
		finalWeights.set(finalWeight($initialWeights, $differences));
		observation.set(userObs);
		brandID.set(selectedId);

		if (swap) {
			setTimeout(() => {
				swapContent();
			}, 500);
		}
	};
</script>

<Button
	on:click={() =>
		handleCall(
			userProbes,
			userAverage,
			userTotal,
			userUserPercentage,
			swap,
			timeUser,
			userDate,
			userObs,
			selectedId
		)}
	variant="raised"
>
	<Label>Generar</Label>
</Button>
