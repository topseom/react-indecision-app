import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error:undefined
    };
    handleAddOption = (e)=>{
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" autoComplete="off" autoFocus type="text" name="option"/>
                    <button className="button" type="submit">Add Option</button>
                </form>
                
            </div>
        )
    }
}