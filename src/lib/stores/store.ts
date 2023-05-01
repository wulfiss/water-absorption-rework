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
const time = writable({ initial: '', final: '' });
const date: Writable<string> = writable('');
const observation: Writable<string> = writable('');
const display: Writable<number> = writable(0);

export {
	sealsNumber,
	percentages,
	initialWeights,
	finalWeights,
	differences,
	averageFinal,
	time,
	date,
	observation,
	display
};
