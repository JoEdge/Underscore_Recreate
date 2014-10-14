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


joanna.min = function (list) {

  for (var i=0; i<1; i++) {
    list.sort();
}
  return list[0];

};

//max - Returns the maximum value in list.

joanna.max = function () {

var most = this[0];
var len = this.length;

for (var i = 1; i < len; i++) {
  if (this[i] > most) most = this[i];
}
return most;
};
