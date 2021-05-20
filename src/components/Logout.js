import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logout extends Component {
    render() {
        return (
            <div>
                <h1>You've been logged out...</h1>
                <p>Thank you for Visiting!!</p>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default Logout
