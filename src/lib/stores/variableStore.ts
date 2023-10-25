import { type Readable, readable } from 'svelte/store';

export const variableStore = readable({
	0: {
		probes: 25,
		userTotalProbes: 20,
		percentage: 4.5
	},
	1: {
		probes: 25,
		userTotalProbes: 20,
		percentage: 8
	},
	2: {
		probes: 25,
		userTotalProbes: 10,
		percentage: 10
	}
});
