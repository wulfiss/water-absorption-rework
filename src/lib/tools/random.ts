const random = (max: number, min: number) => {
	const tmp = Number(Math.random() * (max - min) + min);
	return tmp;
};

export { random };
