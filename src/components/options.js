import React from 'react';
import Option from './option';
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

export default Options;