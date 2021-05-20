import React, { Component } from 'react'
import axios from 'axios'

class Validation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             fname:"",
             lname:"",
             email:"",
             contact:""           
        }

    }

    handlefNameChange = (event) => {
        // if(event.target.value.match("^[a-zA-Z ]*$")!=null) {
            this.setState({fname: event.target.value});
        //   }
    }

    handlelNameChange = (event) => {
        // if(event.target.value.match("^[a-zA-Z ]*$")!=null) {
            this.setState({lname: event.target.value});
        //   }
    }

    handleEmailChange = (event) => {        
        this.setState({email: event.target.value});          
    }

    handleContactChange = (event) => {
        // if(event.target.value.match("^[0-9]*$")!=null) {
            this.setState({contact: event.target.value});
        //   }
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        if (this.state.fname=="") {
            alert("All input fields are required!!")           
            document.getElementById('fname').style.borderColor="red"
        }
        else if(this.state.fname.length > 20) {
            alert("Exceeded character limit!!")
        }
        else if(this.state.lname=="") {
            alert("All input fields are required!!")   
            document.getElementById('lname').style.borderColor="red"
        }
        else if(this.state.lname.length >20) {
            alert("Exceeded character limit!!")
        }
        else if(this.state.email=="") {
            alert("All input fields are required!!")   
            document.getElementById('email').style.borderColor="red"
        }
        else if(!this.state.email.match(/^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i)) {
            alert("Invalid Email!!")
        }
        else if(this.state.contact=="") {
            alert("All input fields are required!!")
            document.getElementById('contact').style.borderColor="red"
        }
        else {
            // axios.post('https://73c17da65f62cb3bbee6c5883dc51c38.m.pipedream.net', {
            //     fname:this.state.fname,
            //     lame: this.state.lname,
            //     email:this.state.email,
            //     contact:this.state.contact, 
            //   },  headers: {'X-Custom-Header': 'value'})
            //   .then((response) => {
            //     console.log(response);
            //   }, (error) => {
            //     console.log(error);
            //   });

              axios.post('https://73c17da65f62cb3bbee6c5883dc51c38.m.pipedream.net', {
                fname:this.state.fname,
                lame: this.state.lname,
                email:this.state.email,
                contact:this.state.contact, 
              },  {
                headers:{
                    key:1
                }
              }  )                                                     
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              })
        }
                            
    }       
        
    

    render() {
        return (
            <div>
                <form >
                    {/* <div> */}
                        <input 
                            name = "fname"
                            id = "fname"                       
                            placeholder = "Enter First Name"                            
                            maxLength = "15"
                            value = {this.state.fname}                            
                            onChange = {this.handlefNameChange}                            
                        />

                        <input 
                            name = "lname"
                            id = "lname"                            
                            placeholder = "Enter Last Name"
                            maxLength = "15"
                            value = {this.state.lname}
                            onChange = {this.handlelNameChange}                            
                        />
                    {/* </div>
                    <div> */}
                        <input
                            name = "email"
                            id = "email"                            
                            placeholder = "Enter Email"                           
                            maxLength = "50"
                            value = {this.state.email}
                            onChange = {this.handleEmailChange}
                        />                        
                    {/* </div>
                    <div> */}
                        <input  
                            name = "contact"
                            id = "contact"
                            type = "tel"
                            placeholder = "Contact Number"
                            maxLength = "10"                           
                            value = {this.state.contact}
                            onChange = {this.handleContactChange}                           
                        />
                    {/* </div> */}
                    <button type="button" onClick= {this.handleSubmit}>Submit</button>
                </form>                
            </div>
        )
    }
}

export default Validation
