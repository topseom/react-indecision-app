class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // 1. default state value
        this.state = {
            counter:props.counter,
            name:props.name
        }
    }
    handleAddOne(){
        this.setState((prevState)=>{
            return{
                counter:prevState.counter + 1
            };
        });
        console.log(this.state);
    }
    handleMinusOne(){
        // 3. change state based on event
        // 4. rerendered use new state values with "setState"
        this.setState((prevState)=>{
            return{
                counter:prevState.counter > 0?prevState.counter - 1:prevState.counter
            };
        });
    }
    handleReset(){ 


        // Don't use this.state in setState 
        // 1. it's asynchoronous
        /*this.setState({
            counter:0  
        });
        this.setState({
            counter: this.state.counter + 1 
        });*/

        // it's synchoronous
        this.setState(()=>{
            return{
                counter:0
            };
        });
        /*this.setState((prevState)=>{
            return{
                counter:prevState.counter+1
            };
        });*/
    }

    // 2. component rendered with default state value
    render(){
        return(
        <div>
           {this.state.name}
           <h1>Count: {this.state.counter}</h1>
           <button onClick={this.handleAddOne}>+1</button>
           <button onClick={this.handleMinusOne}>-1</button>
           <button onClick={this.handleReset}>reset</button>
        </div>
        );
    }
}
Counter.defaultProps = {
    counter:100,
    name:"Julie"
}
ReactDOM.render(<Counter counter={-10}/>,document.getElementById('app'));