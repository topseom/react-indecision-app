// arguments object - no longer bound with arrow function

const add = (a,b)=>{
    //console.log(arguments);
    return a + b;
}
console.log(add(55,1,1001));

// this keyword - no longer bound

// arrow function - not bind it's own value (bind this parent)
// normal function - bind it's own value (bind this itself)

// foreach - like foreach($array as item){}
// map - like foreach($array as &item){}
const user = {
    name:'Monchai',
    cities:['Thailand','New York'],
    printPlacesLived(){ 
        return this.cities.map((city)=>this.name +' has lived in '+city);
    }
};
console.log(user.printPlacesLived());

// Chalenge area
const multiplier = {
    numbers:[4,3,7,6],
    multiplyBy:2,
    multiply(){
        return this.numbers.map((number)=>this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());