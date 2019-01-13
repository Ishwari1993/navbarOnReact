import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Components/button.js';
import StatelessComponent from './Components/passingProps.js';
import './static/css/index.css';

class Root extends Component{
    constructor(){
        super();
        this.changeState=this.changeState.bind(this);
       
        this.state={

            tasks: 
            [
                {
                name: "Audio",
                selected: false
                },

                {
                name: "Video",
                selected: false
                },

                {
                name: "Gallery",
                selected: false
                },

                {
                name: "Contact US",
                selected: false
                }
            ]
        }
    }
    changeState(index){
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.selected = !task.selected
        this.setState({
            tasks:tasks
        })
        console.log(this.state.tasks[index]);
      
    }
 
    render(){
        return(
            <navbar>
            

                {/* <div>
                     <Counter/>
                </div> */}

                <ul >
                {
                            this.state.tasks.map((task, index) =>{
                                return <StatelessComponent key = {task.name} clickHandler={this.changeState} index={index} details={task}/>

                            })
                }
                </ul>

            </navbar>
       
        
            
        )

     }
}
render(<Root />, document.getElementById('react-root'))
export default Root;
    