import { writable, type Writable } from 'svelte/store';

const Class = () => {
	const temp: Writable<number[]> = writable([]);
	return temp;
};
const averageFinal: Writable<number> = writable(0);
const sealsNumber = Class();
const percentages = Class();
const initialWeights = Class();
const finalWeights = Class();
const differences = Class();

export { sealsNumber, percentages, initialWeights, finalWeights, differences, averageFinal };
