import { type Readable, readable } from 'svelte/store';

interface VariablesByBrand {
	maxProbes: number;
	probes: number;
	percentage: number;
	timeMax: number;
	timeMin: number;
}

export const variables: Readable<VariablesByBrand[]> = readable([
	{
		maxProbes: 25,
		probes: 20,
		percentage: 4.5,
		timeMax: 90,
		timeMin: 70
	},
	{
		maxProbes: 25,
		probes: 20,
		percentage: 8,
		timeMax: 90,
		timeMin: 70
	},
	{
		maxProbes: 10,
		probes: 10,
		percentage: 10,
		timeMax: 90,
		timeMin: 70
	}
]);
