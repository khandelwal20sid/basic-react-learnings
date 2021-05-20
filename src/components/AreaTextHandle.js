import React, { Component } from 'react'

class AreaTextHandle extends Component {

    constructor(props) {
        super(props)        
    
        this.state = {
            value: "The text is as follows"
        }

        this.changeText = this.changeText.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    

    changeText=(event) =>{
        this.setState({
            value:event.target.value
        })
    }

    submitForm = (event) => {
        alert("The text is: " + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.submitForm}>
                    <textarea value={this.state.value} onChange={this.changeText}></textarea>
                    <button>Click</button>
                </form>
            </div>
        )
    }
}

export default AreaTextHandle
