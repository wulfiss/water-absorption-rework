const random = (max: number, min: number) => {
	const tmp = Number((Math.random() * (max - min) + min).toFixed(1));
	return tmp;
};

export { random };
