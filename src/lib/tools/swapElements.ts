/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { random } from './random';

/* sealLost(); generate an array that contain up to 4 number, between 0 and 19;
this numbers are the "seals" that were lost during the test. */
const sealLost = () => {
	const x = Math.ceil(random(3, 0));
	const arr: number[] = [];

	for (let i = 0; i <= x; i += 1) {
		arr.push(Math.ceil(random(19, 0)));
	}

	return arr;
};

const swapContent = () => {
	//this is a simplify version of the code down below, chatgpt
	const EXTRA_SEAL_START = 20; //this number is where the extras seals start
	const arr = sealLost();

	for (let i = 0; i < arr.length; i += 1) {
		// create an array of the element types to swap
		const types = ['seal', 'initial', 'final', 'diff', 'perc'];
		// loop through each type and swap the elements
		for (const type of types) {
			// get the elements by their ids
			const elemOne = document.querySelector<HTMLDivElement>(`#${type}Child${arr[i]}`)!;
			const elemTwo = document.querySelector<HTMLDivElement>(
				`#${type}Child${i + EXTRA_SEAL_START}`
			)!;
			// clone the first element
			const elemTmp = elemOne.cloneNode(true) as HTMLDivElement;
			// swap the innerHTML of the elements
			elemOne.innerHTML = elemTwo.innerHTML;
			elemTwo.innerHTML = elemTmp.innerHTML;
		}
	}
};

export { swapContent };

/* swapContent takes the seals that were "lost" and its content with the 5 extras seals*/

/* const swapContent = () => {
	const EXTRA_SEAL_START = 20; //this number is where the extras seals start
	const arr = sealLost();

	for (let i = 0; i < arr.length; i += 1) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const divOne = document.querySelector<HTMLDivElement>(`#grandChild${arr[i]}`)!;
		const divTwo = document.querySelector<HTMLDivElement>(`#grandChild${i + EXTRA_SEAL_START}`)!;
		const tmp = divOne.cloneNode(true) as HTMLDivElement; //make a copy of the node.

		divOne.innerHTML = divTwo.innerHTML;
		divTwo.innerHTML = tmp.innerHTML; 

		const sealOne = document.querySelector<HTMLDivElement>(`#sealChild${arr[i]}`)!;
		const sealTwo = document.querySelector<HTMLDivElement>(`#sealChild${i + EXTRA_SEAL_START}`)!;

		const sealTemp = sealOne.cloneNode(true) as HTMLDivElement;

		sealOne.innerHTML = sealTwo.innerHTML;
		sealTwo.innerHTML = sealTemp.innerHTML;

		const initialOne = document.querySelector<HTMLDivElement>(`#initialChild${arr[i]}`)!;
		const initialTwo = document.querySelector<HTMLDivElement>(
			`#initialChild${i + EXTRA_SEAL_START}`
		)!;

		const initialTemp = initialOne.cloneNode(true) as HTMLDivElement;

		initialOne.innerHTML = initialTwo.innerHTML;
		initialTwo.innerHTML = initialTemp.innerHTML;

		const finalOne = document.querySelector<HTMLDivElement>(`#finalChild${arr[i]}`)!;
		const finalTwo = document.querySelector<HTMLDivElement>(`#finalChild${i + EXTRA_SEAL_START}`)!;

		const finalTemp = finalOne.cloneNode(true) as HTMLDivElement;

		finalOne.innerHTML = finalTwo.innerHTML;
		finalTwo.innerHTML = finalTemp.innerHTML;

		const diffOne = document.querySelector<HTMLDivElement>(`#diffChild${arr[i]}`)!;
		const diffTwo = document.querySelector<HTMLDivElement>(`#diffChild${i + EXTRA_SEAL_START}`)!;

		const diffTemp = diffOne.cloneNode(true) as HTMLDivElement;

		diffOne.innerHTML = diffTwo.innerHTML;
		diffTwo.innerHTML = diffTemp.innerHTML;

		const percOne = document.querySelector<HTMLDivElement>(`#percChild${arr[i]}`)!;
		const percTwo = document.querySelector<HTMLDivElement>(`#percChild${i + EXTRA_SEAL_START}`)!;

		const percTemp = percOne.cloneNode(true) as HTMLDivElement;

		percOne.innerHTML = percTwo.innerHTML;
		percTwo.innerHTML = percTemp.innerHTML;
	}
}; */
