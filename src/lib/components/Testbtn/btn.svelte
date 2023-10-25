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
		brandID,
		numberProbe
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
	import { countSeal } from '$lib/tools/countSeal';

	export let maxProbes: number;
	export let averageWeight: number;
	export let probes: number;
	export let percentage: number;
	export let swap: boolean;
	export let userDate: string;
	export let timeUser: string;
	export let userObs: string;
	export let selectedId: number;

	const handleCall = async (
		maxProbes: number,
		averageWeight: number,
		probes: number,
		percentage: number,
		swap: boolean,
		timeUser: string,
		userDate: string,
		userObs: string,
		selectedId: number
	) => {
		display.set(1);
		numberProbe.set(countSeal());
		time.set(timeGenerator(timeUser));
		date.set(reverseDate(userDate));
		sealsNumber.set(sealGenerator(maxProbes));
		percentages.set(percentageGenerator(percentage, probes));
		initialWeights.set(initialWeight(averageWeight, maxProbes));
		averageFinal.set(averageCalculator($percentages, percentage));
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
			maxProbes,
			averageWeight,
			probes,
			percentage,
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
