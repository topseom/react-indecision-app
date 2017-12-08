/*const obj = {
    name:'Vikram',
    getName(){
        return this.name;   
    }
};

const getName = obj.getName.bind({name:"top"});
console.log(getName());*/

// it's object!
// - props use to pass data between component
// - props come from above(parent)
// - props can't be change by component it'self

// - state can change it'self not change props because it's parent
// - state defined in component it'self
// - state can be change by component it'self

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleEditOption = this.handleEditOption.bind(this);
        this.state = {
            options:[]
        }
    }
    handleDeleteOptions(){
        this.setState((prevState)=>{
            return{
                options:[]
            }
        })
    }
    handlePick(){
        let n = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[n]);
    }
    handleAddOption(option){
        if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }else{
            this.setState((prevState)=>{
                let options = prevState.options;
                options.push(option);
                return{
                    options
                }
            });
        }
    }
    handleDeleteOption(option){
        this.setState((prevState)=>{
            let options = prevState.options;
            options = options.filter((op)=>op!=option);
            return{
                options
            }
        });
    }
    handleEditOption(option,index){
        this.setState((prevState)=>{
            let options = prevState.options;
            options[index] = option;
            return{
                options
            }
        });
    }
    render(){
        const title = "Indecision";
        const subtitle = "Put your lide in the hand of computer";

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    handlePick={this.handlePick} 
                    hasOptions={this.state.options.length > 0} 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                    handleEditOption={this.handleEditOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}  
                />
            </div>
        );
    }
}

class Header extends React.Component {
    constructor(props){
        super(props);
    }
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
            <div>
                <button  
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do
                </button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        // override method must use super(props) to keep props value
        super(props);
        // Override
    }
    render(){
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <ol>
                {
                    this.props.options.map((option,index)=>
                        <Option 
                            key={index} 
                            handleDeleteOption={this.props.handleDeleteOption} 
                            index={index} 
                            optionText={option}
                            handleEditOption={this.props.handleEditOption}
                        />
                    )
                }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component{
    constructor(props){
        super(props);
        this.handleChangeMode = this.handleChangeMode.bind(this);
        this.handleFormEdit = this.handleFormEdit.bind(this);
        this.state = {
            editMode:false
        }
    }
    handleChangeMode(){
        this.setState((prevState)=>{
            return{
                editMode:!prevState.editMode
            }
        });
    }
    handleFormEdit(e){
        e.preventDefault();

        let index = this.props.index;
        let option = e.target.elements.edit.value;
        if(option){
            this.props.handleEditOption(option,this.props.index);
            this.handleChangeMode();
            e.target.elements.edit.value = null;
        }
    }
    render(){
        return (
            <div>
                <li>
                {
                    this.state.editMode
                    ?
                    <div>
                        <form onSubmit={this.handleFormEdit}>
                            <input name="edit" placeholder={this.props.optionText}/>
                            <button type="submit">edit</button>
                        </form>
                        <button onClick={this.handleChangeMode}>view</button>
                    </div>
                    :
                    <div>
                        {this.props.optionText}
                        <button onClick={this.props.handleDeleteOption.bind(null,this.props.optionText)}>-</button>
                        <button onClick={this.handleChangeMode}>edit</button>
                    </div>
                   
                }
                    
                    
                </li>
            </div>
        );
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            let err = this.props.handleAddOption(option);
            this.setState(()=>{
                return{
                    error:err && err
                }
            });
            if(!err){
                e.target.elements.option.value = null;
            }
            
            
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input autoComplete="off" autoFocus type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))