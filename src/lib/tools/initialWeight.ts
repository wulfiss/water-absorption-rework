import { random } from './random';

/* create an array of 25 number eg: 2.234; */
const initialWeight = (averageWeight: number, total = 25) => {
	// 25 Number of chicken in the test required for senasa
	const CORRECTION_VALUE = 0.95; //the only reason for this value is for generate a floor and a ceiling,
	const arr: number[] = [];

	const maxWeight = averageWeight + CORRECTION_VALUE;
	const minWeight = averageWeight - CORRECTION_VALUE;

	for (let i = 0; i < total; i += 1) {
		const tmp: number = random(maxWeight, minWeight);
		arr.push(tmp);
	}

	return arr;
};

export { initialWeight };
