'use strict';

console.log('App.js is running');

// JSX - JavaScript XML it is javascript extendsion like typescript
// Balbel - is compiler jsx to javascript code or es6 to es5

var app = {
    title: 'Indecision App',
    subtitle: 'Welcome home',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here your options'
    ) : React.createElement(
        'p',
        null,
        'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Monchai',
    age: 19,
    location: 'Thailand'
};
function getLocation(location) {
    if (location == "Thailand") {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var userName = 'Mike';
var userAge = 22;
var userLocation = 'Thailand';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
