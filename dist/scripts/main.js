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

//
