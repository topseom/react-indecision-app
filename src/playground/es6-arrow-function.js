// function square(x){
//     return x * x ;
// };
// console.log(square(3));

// const squareArrow = (x)=>x*x;

// console.log(squareArrow(8));

// Challenge - User Arrow Functions
// getFirstName - Mike smith -> Mike
// create reqular arrow function
// create arrow function using shorthand syntax
const getFirstName = (full)=>{
    return full.split(' ')[0];
};
const getFirstName2 = (full)=>full.split(' ')[0];
console.log(getFirstName('Mike Smith'));