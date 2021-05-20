import React, { Component } from 'react'

class FetchData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             loading: true
        }
    }
    

    async componentDidMount(){
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(data);
        this.setState({
            loading:false
        })
    }

    render() {
        return (
            <div>
                {this.state.loading? 
                    <div>Loading...</div> : 
                    <div>Person</div>}
            </div>
        )
    }
}

export default FetchData
