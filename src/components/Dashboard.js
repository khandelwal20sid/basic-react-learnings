import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props) {
        super(props) 
         
        let loggedIn
        this.state = {
            loggedIn
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("token")  
        if (token === null || token!== "aoudhgiweuahfoiusgpfiqugfo13gwf") {
            this.setState({
                loggedIn: false
            })            
        }
    }

    hanndleLogOut=(e)=>{
        // e.preventDefault()
        localStorage.removeItem("token")
        this.setState({
            loggedIn: false
        })
       
    }
    

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Welcome to Dashboard</h1>
                <button onClick={this.hanndleLogOut}>LogOut</button>
                
            </div>
        )
    }
}

export default Dashboard
