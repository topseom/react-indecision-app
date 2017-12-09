import React from 'react';

export default class Option extends React.Component{
    state = {
        editMode:false
    }
    
    handleChangeMode = ()=>{
        this.setState((prevState)=>{
            return{
                editMode:!prevState.editMode
            }
        });
    }
    handleFormEdit = (e)=>{
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