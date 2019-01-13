import React, {Component} from 'react';


const StatelessComponent =(props)=>{
    return(
        <navbar>

            <navbar>
                <li onClick={()=>{
                    props.clickHandler(props.index);
                }} className={props.details.selected ? 'selected': ""}>
                    {props.details.name}
                </li>
            </navbar>

        </navbar>
    )
}
export default StatelessComponent;


    
        