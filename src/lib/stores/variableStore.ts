import { type Readable, readable } from 'svelte/store';

export const variables = readable({
	0: {
		maxProbes: 25,
		probes: 20,
		percentage: 4.5,
		timeMax: 90,
		timeMin: 70
	},
	1: {
		maxProbes: 25,
		probes: 20,
		percentage: 8,
		timeMax: 90,
		timeMin: 70
	},
	2: {
		maxProbes: 10,
		probes: 10,
		percentage: 10,
		timeMax: 90,
		timeMin: 70
	}
});
