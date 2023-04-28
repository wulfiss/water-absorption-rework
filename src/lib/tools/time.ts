const addTime = (values: string[]): string => {
	const seconds = values.map((e) => Number(e.split(':').reverse()[0])).reduce((a, b) => a + b);

	let minutes = values.map((e) => Number(e.split(':').reverse()[1])).reduce((a, b) => a + b);

	let hours = values
		.map((e) => (e.split(':').reverse()[2] ? Number(e.split(':').reverse()[2]) : 0))
		.reduce((a, b) => a + b);

	minutes *= 60;
	hours *= 3600;

	const result = new Date((hours + minutes + seconds) * 1000).toISOString().slice(11, -8);
	return result.split(':').reverse()[2] == '00' ? result.slice(3) : result;
};

export { addTime };
