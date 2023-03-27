//given a grid with 3 rows and 8 columns
//create a function that calculates least number of steps from pointA to pointB
//movement allowed: down and diagonals, cant move up, left and right
//points given as coordinates along (x, y) axis where point A is the start and point X is the end.

function leastNumSteps(a1, a2, x1, x2) {
	let steps = 0;

	const grid = [
		[1, 2, 3, 4, 5, 6, 7, 8],
		[1, 2, 3, 4, 5, 6, 7, 8],
		[1, 2, 3, 4, 5, 6, 7, 8],
	];

	//check if type of inputs are numbers
	if (
		typeof a1 !== 'number' ||
		typeof a2 !== 'number' ||
		typeof x1 !== 'number' ||
		typeof x2 !== 'number'
	) {
		return `invalid input`;
	}

	//round down to nearest whole numbers, removing decimals
	let Ax = Math.floor(a1);
	let Ay = Math.floor(a2);
	let Xx = Math.floor(x1);
	let Xy = Math.floor(x2);

	//check if source and destination are in the grid
	let insideGrid = false;

	if (Ax >= 1 && Ax <= 8) {
		if (Ay >= 1 && Ay <= 3) {
			if (Xx >= 1 && Xx <= 8) {
				if (Xy >= 1 && Xy <= 3) {
					insideGrid = true;
				}
			}
		}
	}

	if (insideGrid === false) {
		return `input is outside of the grid`;
	}

	return `${steps} steps`;
}

//for testing:
//from start pointA(3, 2) to end pointX(8, 1)
console.log(leastNumSteps(3, 2, 8, 1)); //expected output: 5 steps

console.log(leastNumSteps(2, 2, 9, 4)); //input outside of grid

console.log(leastNumSteps(2, 2, '7', 4)); //invalid input
