class VisibleToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
           visibility:false
        };
    }

    handleToggle(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        });
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visibility?"Show Detail":"Hide Detail"}
                </button>
                <p>
                    {this.state.visibility && "content is here!"}
                </p>
            </div>
        );
    }
}

ReactDOM.render(<VisibleToggle />,document.getElementById('app'));