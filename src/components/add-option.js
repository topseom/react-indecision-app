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
                <form onSubmit={this.handleAddOption}>
                    <input autoComplete="off" autoFocus type="text" name="option"/>
                    <button type="submit">Add Option</button>
                </form>
                <p>{this.state.error}</p>
            </div>
        )
    }
}