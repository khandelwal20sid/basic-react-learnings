import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    

    render() {
        // method1
        // if (this.state.isLoggedIn) {
        //     return(
        //         <div>
        //             Welcome Siddharth
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // method2
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Siddharth</div>
        // } else {
        //     message= <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        // message3
        return(
            this.state.isLoggedIn?
            (<div>Welcome Siddharth</div>) :
            (<div>Welcome Guest</div>)
        )
        
    } 
    
}

export default UserGreeting
