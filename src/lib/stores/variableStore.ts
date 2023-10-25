import { type Readable, readable } from 'svelte/store';

export const variables = readable({
	0: {
		probes: 25,
		userProbes: 20,
		percentage: 4.5
	},
	1: {
		probes: 25,
		userProbes: 20,
		percentage: 8
	},
	2: {
		probes: 10,
		userProbes: 10,
		percentage: 10
	}
});
