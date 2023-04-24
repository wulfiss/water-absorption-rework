import { random } from './random';

const sealLost = () => {
	const x = random(3, 0);
	const arr: number[] = [];

	for (let i = 0; i <= x; i += 1) {
		arr.push(random(19, 0));
	}

	return arr;
};

const swapContent = () => {
	const EXTRA_SEAL_START = 20;
	const arr = sealLost();

	for (let i = 0; i < arr.length; i += 1) {
		const divOne = document.querySelector(`#child${i}`);
		const divTwo = document.querySelector(`#child${i + EXTRA_SEAL_START}`);
		const tmp = divOne.cloneNode(true);

		divOne.innerHTML = divTwo.innerHTML;
		divTwo.innerHTML = tmp.innerHTML;
	}
};

export { swapContent };
