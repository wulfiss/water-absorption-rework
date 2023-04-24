const averageCalculator = (arr: number[], userAverage: number) => {
	const sumTotal = arr.reduce((a, b) => a + b, 0);
	const average: number = sumTotal / arr.length;

	if (average < userAverage) {
		console.log(average);
		return true;
	}
};

export { averageCalculator };
