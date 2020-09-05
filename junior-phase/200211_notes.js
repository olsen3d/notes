//stretch

const objFromArray = arr => {
  return arr.reduce((acc, current, idx) => {
    if (idx % 2 === 0) acc[current] = arr[idx + 1];
    return acc;
  }, {});
};

console.log(objFromArray([1, 2, 3, 4, 5, 6]));
