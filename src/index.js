
exports.min = function min(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  else {
    let rec = array[0];
    for (let i = 0; i < array.length; i++) {
      if (rec > array[i]) {
        rec = array[i];
      }
    }
    return rec;
  }
}

exports.max = function max(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  else {
    let rec = array[0];
    for (let i = 0; i < array.length; i++) {
      if (rec < array[i]) {
        rec = array[i];
      }
    }
    return rec;
  }
}

exports.avg = function avg(array) {
  if (arguments.length === 0 || array.length === 0) {
    return 0;
  }
  else {
    let avg = 0;
    let rec = [];
    for (let i = 0; i < array.length; i++) {
      rec = + rec + array[i];
    }
    avg = rec / array.length;
    return avg;
  }
}
