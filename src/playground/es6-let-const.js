var nameVar = "Monchai";
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = "Monchai";
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = "Monchai";
console.log('nameConst',nameConst);

// Block scoping

var fullName = 'Monchai Jirayupong';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

// var template = <h1>Hello</h1>;
// var app = document.getElementById('app');
// ReactDOM.render(template,app);