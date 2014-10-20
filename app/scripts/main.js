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
  if (items == null) return true;
  if (items !== null) return false;
};

//min - Returns the minimum value in list.


joanna.min = function (list){
    return Math.min.apply ( Math, list);
};

//max - Returns the maximum value in list.

joanna.max = function (list) {
    return Math.max.apply (Math, list);
};
