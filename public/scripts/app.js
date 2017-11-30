'use strict';

var appRoot = document.getElementById('app');

var visibility;
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'show details' : 'hide detail'
        ),
        visibility && React.createElement(
            'p',
            null,
            'this text from hidden'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
