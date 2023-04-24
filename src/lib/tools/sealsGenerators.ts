const sealGenerator = () => {
	const MAX_AMOUNT = 25; //Number of chicken in the test required for senasa

	/* These values are completely arbitrary, can be any number */
	const CEILING_SEAL = 9999;
	const FLOOR_SEAL = 1100;
	const SUBFLOOR_SEAL = 100;

	const arr: number[] = [];

	const maxSeal = parseInt((Math.random() * (CEILING_SEAL - FLOOR_SEAL) + FLOOR_SEAL).toFixed());
	const minSeal = maxSeal - SUBFLOOR_SEAL;

	for (let i = 0; i < MAX_AMOUNT; i += 1) {
		const tmp: number = parseInt((Math.random() * (maxSeal - minSeal) + minSeal).toFixed());
		arr.push(tmp);
	}

	return arr;
};

export { sealGenerator };
