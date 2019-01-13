import React, {Component} from 'react';
import {render} from 'react-dom';
export default class Counter extends Component{
    constructor(){
        super();
        this.state ={
            count: 0
        };
    }
incrementFunction =() =>{
    this.setState({
        count: this.state.count + 1

    });

}
decrementFunction =() =>{
    this.setState({
        count: this.state.count -1

    });

}

   render(){
       return(
           <div>
               <button onClick= {this.incrementFunction}>Increase</button>
               <button onClick= {this.decrementFunction}>Decrease</button>
               <div>
                   state count is: {this.state.count}
               </div>
           </div>
       )
   }
}
