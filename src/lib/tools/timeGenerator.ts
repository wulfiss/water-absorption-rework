import { addTime } from './addTime';
import { random } from './random';

export const timeGenerator = (userTime: string) => {
	const minutes = random(50, 45).toFixed();
	const totalTime = `00:${minutes}:00`;
	const fullTime = `${userTime}:00`;

	const obj = {
		initial: userTime,
		final: addTime([fullTime, totalTime])
	};
	return obj;
};
