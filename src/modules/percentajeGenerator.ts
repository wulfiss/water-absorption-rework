import { averageCalculator } from './averageCalculator';

const percentageGenerator = (averageWeight: number, percentage: number) => {
	const TOTAL_VALUES = 20; //fix number of chickens ask for Senasa in the test
	const MAX_CORRECTION_PERCENTAGE = 1.8;
	/*    fix number for calculating a ceiling percentage, for example with 4.5% 
    the max value would be 8.1% (4.5% * 1.8); */
	const MIN_CORRECTION_PERCENTAGE = 4.2;
	/*     For calculate a floor percentage, 
    it is that value because for example with 4.5% the floor would be 0.3 (4.5 - 4.2) */
	let arr: number[] = [];
	const maxPercentage: number = percentage * MAX_CORRECTION_PERCENTAGE;
	const minPercentage: number = percentage - MIN_CORRECTION_PERCENTAGE;
	let n = null;

	while (!n) {
		arr = [];
		for (let i = 0; i < TOTAL_VALUES; i += 1) {
			const tmp: number = parseFloat(
				(Math.random() * (maxPercentage - minPercentage) + minPercentage).toFixed(2)
			);
			arr.push(tmp);
		}

		n = averageCalculator(arr, percentage);
	}

	console.log(arr);
};

export { percentageGenerator };
