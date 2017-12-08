

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

// stateless function component
// - it's component use props only not have state
// - it's for present component. not use logical

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleEditOption = this.handleEditOption.bind(this);
        this.state = {
            options:props.options
        }
    }
    componentDidMount(){
        try{
            //when enter after render() 
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({ options }));
            }
            console.log("fetching data");
        }catch(e){
            //Do noting at all
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        //when state update
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
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
                return{
                    options:prevState.options.concat([option])
                }
            });
        }
    }
    handleDeleteOption(option){
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((op)=>op!==option)
            }
        });
    }
    handleEditOption(option,index){
        this.setState((prevState)=>{
            prevState.options[index] = option;
            return{
                options:prevState.options
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
IndecisionApp.defaultProps = {
    options:[]
}

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

// Default Props
Header.defaultProps = {
    title:"Indecision"
}

const Action = (props)=>{
    return (
        <div>
            <button  
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do
            </button>
        </div>
    );
}

const Options = (props)=>{
    return (
        <div>
            {
                props.options.length > 0
                ?
                <div>
                    <button onClick={props.handleDeleteOptions}>Remove all</button>
                    <ol>
                    {
                        props.options.map((option,index)=>
                            <Option 
                                key={index} 
                                handleDeleteOption={props.handleDeleteOption} 
                                index={index} 
                                optionText={option}
                                handleEditOption={props.handleEditOption}
                            />
                        )
                    }
                    </ol>
                </div>
                :
                <div>
                   <p> Please Add option to get start! </p>
                </div>
            }
            
        </div>
    );
}
/*const Option = (props)=>{
    return(
        <div>
            <li>
                {props.optionText}
            </li>
        </div>
    ); 
}*/

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
                        <button onClick={this.props.handleDeleteOption.bind(null,this.props.optionText)}>remove</button>
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

// // stateless function component
// const User = (props)=>{
//     return (
//        <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//        </div>
//     );
// }

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))