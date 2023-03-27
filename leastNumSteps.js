//given a grid with 3 rows and 8 columns
//create a function that calculates least number of steps from pointA to pointB
//movement allowed: down and diagonals, cant move up, left and right
//points given as coordinates along (x, y) axis where point A is the start and point X is the end.

function leastNumSteps(a1, a2, x1, x2) {
  //check if type of inputs are numbers
  if (
    typeof a1 !== "number" ||
    typeof a2 !== "number" ||
    typeof x1 !== "number" ||
    typeof x2 !== "number"
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

  //main logic: calculate least steps from startPoint to endPoint

  let steps = 0;

  const grid = [
    [11, 21, 31, 41, 51, 61, 71, 81],
    [12, 22, 32, 42, 52, 62, 72, 82],
    [13, 23, 33, 43, 53, 63, 73, 83],
  ];

  //convert point data to array format grid[rowIndex][colIndex]
  const startPoint = grid[Ay - 1][Ax - 1];
  const endPoint = grid[Xy - 1][Xx - 1];

  console.log(`from A(${Ax},${Ay}) to X(${Xx},${Xy})`);
  console.log(`from grid points ${startPoint} to ${endPoint}`);

  //check position of endpoint relative to startpoint

  return `${steps} steps`;
}

//from start pointA(3, 2) to end pointX(8, 1)
console.log(leastNumSteps(3, 2, 8, 1)); //expected output: 5 steps

//validation test
// console.log(leastNumSteps(2, 2, 9, 4)); //input is outside of the grid
// console.log(leastNumSteps(2, 2, "7", 4)); //invalid input
