/* create an array of 25 number eg: 2.234; */
const initialWeight = (averageWeight: number) => {
	const MAX_AMOUNT = 25; //Number of chicken in the test required for senasa
	const CORRECTION_VALUE = 0.95; //the only reason for this value is for generate a floor and a ceiling,
	const arr: number[] = [];

	const maxWeight = averageWeight + CORRECTION_VALUE;
	const minWeight = averageWeight - CORRECTION_VALUE;

	for (let i = 0; i < MAX_AMOUNT; i += 1) {
		const tmp: number = parseFloat(
			(Math.random() * (maxWeight - minWeight) + minWeight).toFixed(3)
		);
		arr.push(tmp);
	}

	return arr;
};

export { initialWeight };
