console.log(`App.js is running`);

// JSX - JavaScript XML it is javascript extendsion like typescript
// Balbel - is compiler jsx to javascript code or es6 to es5

const app = {
    title:'Indecision App',
    subtitle: 'Welcome home',
    options:[]
}
let onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const clear = ()=>{
    app.options = [];
    render();
};

const remove = (index)=>{
    app.options.splice(index,1);
    render();
};

const onMakeDecision = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options && app.options.length > 0) ?<p>Here your options</p>:<p>No options</p> }
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clear}>Remove All</button>
            <ol>
                {
                    app.options.map((option,key)=><li key={option}>{option} <button onClick={remove.bind(null,key)}>-</button></li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input autoFocus type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();


