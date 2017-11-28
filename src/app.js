console.log(`App.js is running`);

// JSX - JavaScript XML it is javascript extendsion like typescript
// Balbel - is compiler jsx to javascript code or es6 to es5

const app = {
    title:'Indecision App',
    subtitle: 'Welcome home',
    options:['One','Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options && app.options.length > 0) ?<p>Here your options</p>:<p>No options</p> }
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name:'Monchai',
    age: 19,
    location: 'Thailand'
};
function getLocation(location){
    if(location == "Thailand"){
        return <p>Location : {location}</p>;
    }
}

var userName = 'Mike';
var userAge = 22;
var userLocation = 'Thailand';
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);