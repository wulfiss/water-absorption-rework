const difference = (initial: number[], percentage: number[]) => {
	const tmp = percentage.map((el) => el / 100);
	const arr = tmp.map((el, i) => el * initial[i]);
	return arr;
};

export { difference };
/* 
const percent = percentage[i] / 100; 
const temp = initial[i] * percent; 
for calculate how much is, for example 7.50% of 3.376,
you have to do 7.50 / 100 that is equal to 0.075
and then multiply 3.376 by 0.075, that is equal to 0.262 aka difference*/

/* // This function takes in two arrays of numbers: "initial" and "percentage".
const difference = (initial: number[], percentage: number[]) => {
  
	// Map each element of "percentage" to a new array, "tmp", with each element
	// divided by 100. This effectively converts each percentage to a decimal number.
	const tmp = percentage.map((el) => el / 100);
  
	// Map each element of "tmp" to a new array, "arr", with each element multiplied
	// by the corresponding element in "initial". This calculates the difference between
	// the "initial" values and the percentage difference represented by the "percentage" values
	// as decimals.
	const arr = tmp.map((el, i) => el * initial[i]);
	
	// Return the resulting "arr" array, which contains the difference between "initial" values
	// and the percentage difference represented by the "percentage" values as decimals.
	return arr;
  }; */
