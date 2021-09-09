import React from 'react';
import '../assets/css/signup-form.css';


export default class SignupForm extends React.Component {

    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(event){
        this.props.onTextFieldChange(event.target)
    }

    onClick(event){
        this.props.onButtonClick(event)
    }

    render(){

        return (
                <form className = "form">
                    <h1 className = "title">Sign Up</h1>
                    <div className= "input__box">
                        <input className = "input" id = "username"  type="text" placeholder = "Username" onChange = {this.onChange}/>
                        <label className = "error__label">{this.props.usernameError}</label>
                    </div>
        
                    <div className= "input__box">
                        <input className = "input" id = "displayName" type="text" placeholder = "Display Name" onChange = {this.onChange}/>
                        <label className = "error__label">{this.props.displayNameError}</label>
                    </div>
        
                    <div className= "input__box">
                        <input className = "input" id = "password" type="password" placeholder = "Password" onChange = {this.onChange}/>
                        <label className = "error__label">{this.props.passwordError}</label>
                    </div>
        
                    <div className= "input__box">
                        <input className = "input" id = "passwordRepeat" type="password" placeholder = "Password Repeat" onChange = {this.onChange}/>
                        <label className = "error__label">{this.props.passwordRepeatError}</label>
                    </div>

                    <div className = "button__box">
                    <button className = "button" onClick = {this.onClick} >Sign Up</button>
                    </div>
                    
                </form>
            
        )

    }
}

