function lastIndexOf (arr, num) {
  if (arr === []) {
    return -1;
  }
  else {
    let acumulator = null;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        acumulator = i;
      }
    }

    if (acumulator === null) {
      return -1;
    }

    return acumulator;
  }
}