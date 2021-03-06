import React from 'react';
import AddOption from './add-option';
import Options from './options';
import Action from './action';
import Header from './header';
import OptionModal from './option-modal';
 
export default class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOption:undefined
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
    handleDeleteOptions = ()=>{
        this.setState((prevState)=>{
            return{
                options:[]
            }
        })
    }
    handlePick = ()=>{
        let n = Math.floor(Math.random()*this.state.options.length);
        //alert(this.state.options[n]);
        this.setState(()=>{
            return{
                selectedOption:this.state.options[n]
            }
        })
    }
    handleAddOption = (option)=>{
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
    handleDeleteOption = (option)=>{
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((op)=>op!==option)
            }
        });
    }
    handleEditOption = (option,index)=>{
        this.setState((prevState)=>{
            prevState.options[index] = option;
            return{
                options:prevState.options
            }
        });
    }
    handleClearSelectedOption = () =>{
        this.setState(()=>{
            return{
                selectedOption:undefined
            }
        })
    }
    render(){
        const title = "Indecision";
        const subtitle = "Put your lide in the hand of computer";

        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        handlePick={this.handlePick} 
                        hasOptions={this.state.options.length > 0} 
                    />
                    <div className="widget">
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
                    
                </div>
               
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

