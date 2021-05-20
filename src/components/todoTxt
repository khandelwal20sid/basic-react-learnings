import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             task:'',
             tasks:[]
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    addItem(){
        const task= {
            id:Math.random(),
            value: this.state.task.slice()
        };

        const tasks= [...this.state.tasks];
        tasks.push(task);
        this.setState({
            tasks,
            task:""
        })
    };

    deleteItem(id) {
        const tasks = [...this.state.tasks];
        const updatedtasks = tasks.filter(item => item.id !== id);
        this.setState({
            tasks:updatedtasks
        })
    }
    
    
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <div>
                    <input type="text" 
                    placeholder="Enter Items" 
                    value={this.state.task} 
                    onChange={e => {this.updateInput("task", e.target.value)}}/>

                    <button onClick={() => this.addItem()}>Add</button>
                </div>

                <div>
                    <ul>
                       {this.state.tasks.map(item => {
                           return(
                               <li key = {item.id}>{item.value} <button onClick={() => {this.deleteItem(item.id)}}>Delete</button></li>
                           )
                       })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Todo
