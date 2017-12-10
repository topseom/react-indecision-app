import React from 'react';
import Option from './option';
const Options = (props)=>{
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Option</h3>
                <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
            </div>
            {
                props.options.length > 0
                ?
                <div>
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
                </div>
                :
                
                <p className="widget__message"> Please Add option to get start! </p>
                
            }
            
        </div>
    );
}

export default Options;