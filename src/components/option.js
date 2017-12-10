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
               
                {
                    this.state.editMode
                    ?
                    <div>
                        <form className="option" onSubmit={this.handleFormEdit}>
                            <input className="edit-option__input" name="edit" placeholder={this.props.optionText}/>
                            <div>
                                
                                <button className="button button--link button button--link button--space" onClick={this.handleChangeMode}>view</button>
                                <button className="button button--link" type="submit">edit</button>
                            </div>
                            
                        </form>
                        
                        
                    </div>
                    :
                    <div className="option">
                        <p className="option__text">{this.props.index+1}.{this.props.optionText}</p>
                        <div>
                            <button className="button button--link button--space" onClick={this.handleChangeMode}>edit</button>
                            <button className="button button--link button--space" onClick={this.props.handleDeleteOption.bind(null,this.props.optionText)}>remove</button>
                        </div>     
                    </div>
                   
                }
                    
                    
                
            </div>
        );
    }
}