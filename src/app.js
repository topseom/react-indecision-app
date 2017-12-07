const obj = {
    name:'Vikram',
    getName(){
        return this.name;   
    }
};

const getName = obj.getName.bind({name:"top"});
console.log(getName());

class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision";
        const subtitle = "Put your lide in the hand of computer";
        const options = ['Thing one','Thing two','Thing four'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}



class Action extends React.Component {
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do</button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        // override method must use super(props) to keep props value
        super(props);
        // Override
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
        alert('handleRemoveAll');
    }
    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>
                {
                    this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }
                </ol>
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
            e.target.elements.option.value = null;
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input autoFocus type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))