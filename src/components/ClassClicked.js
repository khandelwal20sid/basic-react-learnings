import React, { Component } from 'react'

class ClassClicked extends Component {


    clickHandler() {
        console.log('Clicked the Button');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}

export default ClassClicked
