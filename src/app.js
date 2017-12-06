class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your lide in the hand of computer</h2>
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
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option compoent here
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