import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Login extends Component {

    constructor(props) {
        super(props)
    
        let loggedIn = false
        this.state = {
             username:'',
             password:'',
             loggedIn
        }
    }

    handleUsernameChange=e=>{
        this.setState({
            username:e.target.value
        })
    }

    handlepasswordChange=e=>{
        this.setState({
            password:e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault()
        if (this.state.username==="siddharth" && this.state.password==="khandelwal") {
            localStorage.setItem("token", "aoudhgiweuahfoiusgpfiqugfo13gwf")
            this.setState({
                loggedIn: true
            })   
        }
        else{
            this.setState({
                loggedIn: false
            }) 
        }
    }
    

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div>
                <h1>Login Page</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} /> <br />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlepasswordChange} /> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login
