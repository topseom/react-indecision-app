import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));


// props children is value between close div class
const Layout = (props)=>{
    return(
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
}
const template = (
    <div>
        <h1>This title Page1</h1>
        <p>this is page1</p>
    </div>
);


class OldSyntax  {
    constructor(){
        this.name = 'Mike';
        // if getGreeting bind local value it must bind before use value in this class
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        // bind local value
        return `Hi. My name is ${this.name}`;
    }
}

const oldsyntax  = new OldSyntax();
const getGreeting = oldsyntax.getGreeting;
console.log(getGreeting());

// ------------- new syntax (babel-pluin-transform-class-properties) -------------

class NewSyntax{
    name = 'Jen';
    getGreeting = ()=>{
        // arrow function don't bind local value but it bind parent value
        return `Hi. My name is ${this.name}`;
    }
}
const newsyntax = new NewSyntax();
const newGreeting = newsyntax.getGreeting;
console.log(newGreeting());