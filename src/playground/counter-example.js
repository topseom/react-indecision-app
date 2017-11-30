let count = 0;
const addOne = ()=>{
    count ++;
    renderCouterApp();
};
const minusOne = ()=>{
    if(count > 0 ){
        count --;
    }
    renderCouterApp();
};
const reset = ()=>{ 
    count = 0;
    renderCouterApp();
};

const appRoot = document.getElementById('app');



const renderCouterApp =()=>{
    const templateTwo = (
        <div>
         <h1>Count: {count}</h1>
         <button onClick={addOne}>+1</button>
         <button onClick={minusOne}>-1</button>
         <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderCouterApp();




