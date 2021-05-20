import React, { Component } from 'react'

class MutipleInputs extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             check:true,
             numbers:10
        }
    }

    handleChange = (event) => {
        const target = event.target;        
        const value = target.type === 'number' ? target.value: target.checked;
        const name = target.name

        this.setState({
            [name] :value
        });
    }
    

    render() {
        return (
            <div>
                <form>
                    <label>
                        <input  
                            name="check"                    
                            type="checkbox" 
                            checked = {this.state.check}
                            onChange = {this.handleChange}
                        />
                    </label>

                    <label>
                        <input  
                            name="numbers"                    
                            type="number" 
                            value={this.state.numbers}                            
                            onChange = {this.handleChange}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default MutipleInputs
