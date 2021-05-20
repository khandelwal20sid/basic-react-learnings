import React, { Component } from 'react'

class TodoForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             task:'',
             tasks: []
        }

        this.handleTasks = this.handleTasks.bind(this)
        this.submitTasks = this.submitTasks.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }
    
    handleTasks = event => {
        this.setState({
            task:{
                id: Math.random() , 
                value: event.target.value
            } 
        })
    }

    submitTasks = (event) =>{
        this.state.tasks.push(this.state.task)
        this.setState({
            tasks: this.state.tasks,
            task:''
        })
        event.preventDefault()
    }

    deleteTask(id) {
        const tasks= {...this.state.tasks};      
        const updateTasks = this.state.tasks.filter(this.state.task.id !== id)
        this.setState({
            tasks: updateTasks
        })
    } 


    render() {
        return (
            <div>
                <h1>Todo-App</h1>
                <form>
                    <input type="text" placeholder="New Task" value={this.state.task} onChange={this.handleTasks} />
                    <button onClick = {this.submitTasks}>Add</button>
                </form>
                <div>
                    {this.state.tasks.map((task) =>{
                        return(
                            <ul>
                                <li key={task.id}>
                                    {task.value} 
                                    <button onClick={this.deleteTask(task.id)}>Delete</button>
                                </li>
                            </ul>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default TodoForm

