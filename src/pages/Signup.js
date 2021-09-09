import React from 'react';
import SignupForm from '../components/Signup-Form';
import '../assets/css/signup-page.css';

export default class Signup extends React.Component{

    constructor(){
        super()
        this.onTextFieldChange = this.onTextFieldChange.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.state = {
            username:null,
            displayName:null,
            password:null,
            passwordRepeat:null,
            usernameError:'',
        }
    }

    onTextFieldChange = event =>{

        const {id,value} = event
        this.setState({
            [id]: value
        })
    }

    onButtonClick(event){
        event.preventDefault()

        console.log(this.state.username)

        if(this.state.username == null){
            this.setState({
                usernameError: 'Burası Boş Olamaz'
            })
        }
    }

    render(){
    return(
        <div className = "container">
            
            <SignupForm onTextFieldChange = {this.onTextFieldChange}
                onButtonClick = {this.onButtonClick}
                usernameError = {this.state.usernameError} />
                
        </div>
        )
    }

}

/* 

                
            
*/