import React, {Component} from 'react';


const StatelessComponent =(props)=>{
    return(
        <div>

            <div>
                <li onClick={()=>{
                    props.clickHandler(props.index);
                }} className={props.details.selected ? 'selected': ""}>
                    {props.details.name}
                </li>
            </div>

        </div>
    )
}
export default StatelessComponent;


    
        