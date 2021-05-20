import React, { Component } from 'react'

class SelectTextHandle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value:'optionC'
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            value:event.target.value
        })
    }
    
    handleSubmit = (event) => {
        alert("The Selected Option is "+ this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="optionA">OptionA</option>
                        <option value="optionB">OptionB</option>
                        <option value="optionC">OptionC</option>
                        <option value="optionD">OptionD</option>
                        <option value="optionE">OptionE</option>
                        <option value="optionF">OptionF</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SelectTextHandle
