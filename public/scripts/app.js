'use strict';

// arguments object - no longer bound with arrow function

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

// arrow function - not bind it's own value (bind this parent)
// normal function - bind it's own value (bind this itself)

// foreach - like foreach($array as item){}
// map - like foreach($array as &item){}
var user = {
    name: 'Monchai',
    cities: ['Thailand', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Chalenge area
var multiplier = {
    numbers: [4, 3, 7, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};
console.log(multiplier.multiply());
