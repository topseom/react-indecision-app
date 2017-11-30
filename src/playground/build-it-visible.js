const appRoot = document.getElementById('app');

var visibility;
const toggleVisibility = ()=>{
    visibility = !visibility;
    render();
}
const render = ()=>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility?'show details':'hide detail'}</button>
            {visibility && <p>this text from hidden</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render();