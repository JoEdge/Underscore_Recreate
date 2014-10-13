// .map() - creates a new array

/*var num = [1, 2, 3, 4, 5];

var newNum = [];

  for (var i=0; i < num.length; i++) {

    newNum.push(num[i] * 5);

};

console.log(newNum); */


// .reduce() - reduce boils down a list of values into a single value.


// .size() - Return the number of values in the list.

var joanna = {};

joanna.size = function (list) {

  if (list == null) {

      return 0;
}

else {

   return list.length;
}

};
