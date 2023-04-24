import {
	sealsNumber,
	percentages,
	initialWeights,
	finalWeights,
	differences,
	averageFinal
} from '../stores/store';

import { averageCalculator } from './averageCalculator';
import { difference } from './differences';
import { finalWeight } from './finalWeight';
import { initialWeight } from './initialWeight';
import { percentageGenerator } from './percentageGenerator';
import { sealGenerator } from './sealsGenerators';

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
	finalWeights.set(finalWeight(initialWeights, $differences));
};

export { handleCall };
