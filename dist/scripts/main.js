// .map() - creates a new array

/*var num = [1, 2, 3, 4, 5];

var newNum = [];

  for (var i=0; i < num.length; i++) {

    newNum.push(num[i] * 5);

};

console.log(newNum); */


// .reduce() - reduce boils down a list of values into a single value.

function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// .size() - Return the number of values in the list.

var joanna = {};

function size (joanna) {

  if (joanna === null) {

      return 0;

} else

  return joanna.length;

};
