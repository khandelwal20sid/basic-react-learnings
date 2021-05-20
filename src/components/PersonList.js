import axios from 'axios'
import React, { Component } from 'react'

class PersonList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             persons:[]
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                this.setState({
                    persons: res.data
                })
            })
            .catch(err =>{
                console.log("Error!");
            })
    }
    

    render() {
        return (
            <ul>
                {this.state.persons.map(person =>
                    <li key={person.id}>
                        {person.name}
                    </li>
                )}
            </ul>
        )
    }
}

export default PersonList
