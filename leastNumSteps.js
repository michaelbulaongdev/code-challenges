//given a grid with 3 rows and 8 columns
//create a function that calculates the least number of steps from pointA to pointX
//movement allowed: down and diagonals, cannot move up, left and right
//arguments must be whole number coordinates: pointA(Ax,Ay) pointX(Xx,Xy)
//range of Ax and Xx: 1-8
//range of Ay and Xy: 1-3

function leastNumSteps(Ax, Ay, Xx, Xy) {
  //check if inputs are numbers
  if (
    typeof Ax !== "number" ||
    typeof Ay !== "number" ||
    typeof Xx !== "number" ||
    typeof Xy !== "number"
  ) {
    return `invalid input: must be number type`;
  }

  //check if inputs are whole numbers
  if (
    Ax - Math.floor(Ax) !== 0 ||
    Ay - Math.floor(Ay) !== 0 ||
    Xx - Math.floor(Xx) !== 0 ||
    Xy - Math.floor(Xy) !== 0
  ) {
    return `invalid input: must be whole numbers`;
  }

  //check if inputs are inside the grid
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
  if (!insideGrid) {
    return `invalid input: outside of grid`;
  }

  //========================
  //main logic: calculate least steps from startPoint to endPoint
  //========================

  let steps = 0;

  const grid = [
    [11, 21, 31, 41, 51, 61, 71, 81],
    [12, 22, 32, 42, 52, 62, 72, 82],
    [13, 23, 33, 43, 53, 63, 73, 83],
  ];

  //convert coordinates to grid[rowIndex][colIndex]
  const startPoint = grid[Ay - 1][Ax - 1];
  const endPoint = grid[Xy - 1][Xx - 1];

  console.log(`from A(${Ax},${Ay}) to X(${Xx},${Xy})`);
  console.log(`grid: from ${startPoint} to ${endPoint}`);

  //if X and A are on the same y-axis
  if (Xx === Ax) {
    //if X and A are the same
    if (Xy === Ay) {
      //do nothing
    }
    //if X is directly below A
    else if (Xy > Ay) {
      for (let i = Ay - 1; i < Xy - 1; i++) {
        steps = steps + 1;
      }
    }
    //if X is directly above A
    else if (Xy < Ay) {
      if (Ay - Xy === 1) {
        steps = 3;
      } else {
        steps = 2;
      }
    }
  }

  //if X is to the right of A
  if (Xx > Ax) {
  }

  return `${steps} steps`;
}

//from testing
console.log(leastNumSteps(4, 2, 4, 1));

//validation test
// console.log(leastNumSteps(2, 2, 9, 4)); //input is outside of the grid
// console.log(leastNumSteps(2, 2, "7", 4)); //invalid input