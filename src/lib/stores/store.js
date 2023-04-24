import { writable } from 'svelte/store';

const sealsNumber = writable(null);
const percentages = writable(null);
const initialWeights = writable(null);
const finalWeights = writable(null);
const differences = writable(null);

export { sealsNumber, percentages, initialWeights, finalWeights, differences };
