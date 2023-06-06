//calculate the average of the arr and if is lesser than the userAverage will return true.
//And update the average store.
const averageCalculator = (arr: number[], userAverage: number) => {
	const sumTotal = arr.reduce((a, b) => a + b, 0);
	const average: number = sumTotal / arr.length;

	if (average < userAverage) {
		return average;
	}
};

export { averageCalculator };
