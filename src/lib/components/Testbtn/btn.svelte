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

	interface Props {
		maxProbes: number;
		averageWeight: number;
		probes: number;
		percentage: number;
		swap: boolean;
		userDate: string;
		timeUser: string;
		userObs: string;
		selectedId: number;
		timeMax: number;
		timeMin: number;
	}

	let {
		maxProbes,
		averageWeight,
		probes,
		percentage,
		swap,
		userDate,
		timeUser,
		userObs,
		selectedId,
		timeMax,
		timeMin
	}: Props = $props();

	const handleCall = async (
		maxProbes: number,
		averageWeight: number,
		probes: number,
		percentage: number,
		swap: boolean,
		timeUser: string,
		userDate: string,
		userObs: string,
		selectedId: number,
		timeMax: number,
		timeMin: number
	) => {
		display.set(1);
		numberProbe.set(countSeal());
		time.set(timeGenerator(timeUser, timeMax, timeMin));
		date.set(reverseDate(userDate));
		sealsNumber.set(sealGenerator(maxProbes));
		percentages.set(percentageGenerator(percentage, probes));
		initialWeights.set(initialWeight(averageWeight, maxProbes));
		const calculatedAverage = averageCalculator($percentages, percentage);
		if (calculatedAverage !== undefined) {
			averageFinal.set(calculatedAverage);
		}
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
	onclick={() =>
		handleCall(
			maxProbes,
			averageWeight,
			probes,
			percentage,
			swap,
			timeUser,
			userDate,
			userObs,
			selectedId,
			timeMax,
			timeMin
		)}
	variant="raised"
>
	<Label>Generar</Label>
</Button>
