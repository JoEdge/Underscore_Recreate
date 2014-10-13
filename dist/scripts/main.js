// .map() - creates a new array

/*var num = [1, 2, 3, 4, 5];

var newNum = [];

  for (var i=0; i < num.length; i++) {

    newNum.push(num[i] * 5);

};

console.log(newNum); */

// .size() - Return the number of values in the list.

var joanna = {};

joanna.size = function (list) {

  if (list == null) {
      return 0;
} else {
  return list.length;
}
};

//isEmpty Returns true if an enumerable object contains no values

joanna.empty = function (items) {
  if (items === null) {
      return true;
  } else {
      return false;
  }
};

//min - Returns the minimum value in list.

joanna.min = function (list){
    return Math.min.apply ( Math, list);
};


//max - Returns the maximum value in list.

joanna.max = function (list) {
    return Math.max.apply (Math, list);
};
