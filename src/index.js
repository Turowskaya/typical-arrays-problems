
exports.min = function min (array) {
  if (array.length === 0){
    return 0;
  } else{
    array.sort((a,b) => a-b);
     return array[0];
  }
}

exports.max = function max (array) {
  if (array.length === 0){
    return 0;
  } else{
    array.sort((a,b) => a-b);
     return array[array.length-1];
  }
}

exports.avg = function avg (array) {
  if (array.length === 0){
    return 0;
  } else{
    let number = 0;

    for(number of array){
      let sum;
      sum += number;
      return sum/array.length;
    }
  }
}
