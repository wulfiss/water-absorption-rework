import { finalWeights } from '../stores/store';

const finalWeight = (initial: number[], difference: number[]) => {
	const arr: number[] = [];

	for (let i = 0; i < initial.length; i += 1) {
		const temp = Number((initial[i] + difference[i]).toFixed(3));
		arr.push(temp);
	}

	finalWeights.set(arr);
};

export { finalWeight };
