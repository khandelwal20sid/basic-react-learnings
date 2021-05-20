import axios from 'axios'
import React, { Component } from 'react'

class PersonInput extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }

    handleChange = event =>{
        this.setState({
            name: event.target.value
        })
    }

    handleSumbit= (e => {
        e.preventDefault()

        const user ={
            name: this.state.value
        }     
        
        axios.post('https://jsonplaceholder.typicode.com/users', {user})
            .then(res=> {
                console.log(res);
                console.log(res.data);
            })
            .catch()
    })

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default PersonInput
