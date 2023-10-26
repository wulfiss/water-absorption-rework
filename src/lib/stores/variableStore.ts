import { type Readable, readable } from 'svelte/store';

export const variables = readable({
	0: {
		maxProbes: 25,
		probes: 20,
		percentage: 4.5
	},
	1: {
		maxProbes: 25,
		probes: 20,
		percentage: 8
	},
	2: {
		maxProbes: 10,
		probes: 10,
		percentage: 10
	}
});
