import { random } from './random';

const sealGenerator = (total = 25) => {
	// 25 Number of chicken in the test required for senasa

	/* These values are completely arbitrary, can be any number */
	const CEILING_SEAL = 9999;
	const FLOOR_SEAL = 1100;
	const SUBFLOOR_SEAL = 100;

	const arr: number[] = [];

	const maxSeal = random(CEILING_SEAL, FLOOR_SEAL);
	const minSeal = maxSeal - SUBFLOOR_SEAL;

	for (let i = 0; i < total; i += 1) {
		const tmp: number = random(maxSeal, minSeal);
		arr.push(tmp);
	}

	return arr;
};

export { sealGenerator };
