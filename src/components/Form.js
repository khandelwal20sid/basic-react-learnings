import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment:'',
             skills:'React'
        }
    }
    

    handleUsernameChange = (event) => {
        this.setState({
           username:event.target.value
        }) 
    }

    handleCommentChange = (event) => {
        this.setState({
           comment:event.target.value
        }) 
    }

    handleSkillsChange = (event) => {
        this.setState({
            skills:event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.skills}`)
        event.preventDefault()
    }


    render() {
        const {username, comment, skills} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                </div>

                <div>
                    <label>Comments:</label>
                    <textarea value={comment} onChange={this.handleCommentChange}></textarea>
                </div>

                <div>
                    <label>Skills:</label>
                    <select value={skills} onChange={this.handleSkillsChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
