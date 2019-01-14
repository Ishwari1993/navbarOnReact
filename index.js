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
        var newTasks = tasks.map((item, i) => {
            if (i === index) {
                item.selected = true;
            } else {
                item.selected = false;
            }
            return item;
        })
        this.setState({
            tasks:newTasks
        })
        console.log(this.state.tasks[index]);
      
    }
 
    render(){
        return(
            <div className="navbar">
            

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

            </div>
       
        
            
        )

     }
}
render(<Root />, document.getElementById('react-root'))
export default Root;
    