import React, { Component } from 'react'

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            fname:"",
            lname:"",
            email:"",
            contact:"",
            gender:'male',
            isValid:true
            
        }
    }

    handlefNameChange = (event) => {
        const fnameRegex = /^[A-Za-z]+/;        
        if(event.target.value.match(fnameRegex)) {
            this.setState({
                fname:event.target.value,
                isValid: true
            }) 
        } else {
            this.setState({
                fname:event.target.value,
                isValid: false
            }) 
        }
    }

    handlelNameChange = (event) => {
        const lnameRegex = /^[A-Za-z]+/;        
        if(event.target.value.match(lnameRegex)) {
            this.setState({
                lname:event.target.value,
                isValid: true
            }) 
        } else {
            this.setState({
                lname:event.target.value,
                isValid: false
            }) 
        }
    }

    handleEmailChange = (event) => {
        const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if(event.target.value.match(emailRegex)) {
            this.setState({
                email:event.target.value,
                isValid: true
            }) 
        } else {
            this.setState({
                email:event.target.value,
                isValid: false
            }) 
        }
        
    }

    handleContactChange = (event) => {
        this.setState({
            contact:event.target.value
        }) 
    }

    handleGenderChange = (event) => {
        this.setState({
           gender:event.target.value
        }) 
    }
    
    maxLengthCheck = (event) => {
        if (event.target.value.length > event.target.maxLength) {
         event.target.value = event.target.value.slice(0, event.target.maxLength)
          }
        }
        
    handleSubmit = (event) => {
        if (this.state.fname=="" || this.state.lname=="" || this.state.email =="" || this.state.contact =="") {
            alert("All input fields are required!!")
            if(this.state.fname=="") {
                document.getElementById('fname').style.borderColor="red"
            } else if(this.state.lname=="") {
                document.getElementById('lname').style.borderColor="red"
            }else if(this.state.email=="") {
                document.getElementById('email').style.borderColor="red"
            } else if(this.state.contact=="") {
                document.getElementById('contact').style.borderColor="red"
            }                       
        }
        
        else if (!this.state.email.isValid) {
            alert("Invalid Email")
        }

        else if (!this.state.fname.isValid) {
            alert("Invalid Name")
        }

        else if (!this.state.lname.isValid) {
            alert("Invalid Name")
        }

        else{
            alert("Name:" + this.state.fname +" " + this.state.lname + " " +
                "E-mail:" + this.state.email +" " + "Contact:" + this.state.contact +" " +
                "Gender:" + this.state.gender)
        }        
        
        event.preventDefault()
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            name = "fname"
                            id = "fname"                       
                            placeholder = "Enter First Name"
                            // pattern="[A-Za-z]+"
                            maxLength = "15"
                            value = {this.state.fname}                            
                            onChange = {this.handlefNameChange}
                            onInput={this.maxLengthCheck}
                        />

                        <input 
                            name = "lname"
                            id = "lname"
                            type = "text"
                            // pattern="[A-Za-z]+"
                            placeholder = "Enter Last Name"
                            maxLength = "15"
                            value = {this.state.lname}
                            onChange = {this.handlelNameChange}
                            onInput={this.maxLengthCheck}
                        />
                    </div>

                    <div>
                        <input
                            name = "email"
                            id = "email"                            
                            placeholder = "Enter Email"                           
                            maxLength = "50"
                            value = {this.state.email}
                            onChange = {this.handleEmailChange}
                            onInput={this.maxLengthCheck}
                        />                        
                    </div>

                    <div>
                        <input
                            name = "contact"
                            id = "contact"
                            type = "tel"
                            placeholder = "Contact Number"
                            maxLength = "10"
                            pattern="[0-9]{10,}"
                            value = {this.state.contact}
                            onChange = {this.handleContactChange}
                            onInput={this.maxLengthCheck}
                        />
                    </div>

                    <div>
                        <label>Gender:
                            <select 
                                name="gender"
                                value = {this.state.gender} onChange={this.handleGenderChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                            </select>
                        </label>
                    </div>

                    <button>Submit</button>
                    {/* {!this.state.isValid?<p>Please enter Valid email</p> : <p>Valid Email</p>} */}                    
                </form>
            </div>            
        )
        
    }
}

export default RegistrationForm
