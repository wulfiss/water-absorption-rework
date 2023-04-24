import { random } from './random';

/* sealLost(); generate an array that contain up to 4 number, between 0 and 19;
this numbers are the "seals" that were lost during the test. */
const sealLost = () => {
	const x = random(3, 0);
	const arr: number[] = [];

	for (let i = 0; i <= x; i += 1) {
		arr.push(random(19, 0));
	}

	return arr;
};

/* swapContent takes the seals that were "lost" and its content with the 5 extras seals*/

const swapContent = () => {
	const EXTRA_SEAL_START = 20; //this number is where the extras seals start
	const arr = sealLost();

	for (let i = 0; i < arr.length; i += 1) {
		const divOne = document.querySelector(`#child${i}`);
		const divTwo = document.querySelector(`#child${i + EXTRA_SEAL_START}`);
		const tmp = divOne.cloneNode(true); //make a copy of the node.

		divOne.innerHTML = divTwo.innerHTML;
		divTwo.innerHTML = tmp.innerHTML;
	}
};

export { swapContent };