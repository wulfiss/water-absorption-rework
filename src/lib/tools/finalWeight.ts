const finalWeight = (initial: number[], difference: number[]) => {
	const arr = difference.map((el, i) => el + initial[i]);

	return arr;
};

export { finalWeight };
