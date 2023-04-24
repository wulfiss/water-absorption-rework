const finalWeight = (initial: number[], difference: number[]) => {
	const arr: number[] = [];

	for (let i = 0; i < difference.length; i += 1) {
		const temp = parseFloat((initial[i] + difference[i]).toFixed(3));
		arr.push(temp);
	}

	return arr;
};

export { finalWeight };
