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
    render(){
        return (
            <button>What should I do</button>
        );
    }
}

class Options extends React.Component{
    render(){
        return (
            <div>
                Options component here
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
    render(){
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))