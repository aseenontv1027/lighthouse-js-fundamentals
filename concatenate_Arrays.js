function concat (arr1, arr2) {
  let i = 0;
  let j = 0;
  let acc = [];
  
  while (arr1 != [] && arr1[i] != undefined) {
    acc.push(arr1[i]);
    i++;
  }
  
  while (arr2 != [] && arr2[j] != undefined) {
    acc.push(arr2[j]);
    j++;
  }

  return acc;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);