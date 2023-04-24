const difference = (initial: number[], percentage: number[]) => {
	const arr: number[] = [];

	for (let i = 0; i < percentage.length; i += 1) {
		const percent = percentage[i] / 100;
		const temp = initial[i] * percent;
		arr.push(temp);
	}

	return arr;
};

export { difference };
/* 
const percent = percentage[i] / 100; 
const temp = initial[i] * percent; 
for calculate how much is, for example 7.50% of 3.376,
you have to do 7.50 / 100 that is equal to 0.075
and then multiply 3.376 by 0.075, that is equal to 0.262 aka difference*/
