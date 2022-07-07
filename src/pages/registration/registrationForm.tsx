import React, { useState } from "react";
import {RegisterUserErrors, RegisterUserType } from "../../api/registerUser";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { AppRoute } from "../../enums/router";
import { Error, RegistrationFormWrapper } from "./registrationStyles";

interface UserRegistrationDataType {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function getPasswordErrors(
    formData: UserRegistrationDataType,
    errors: RegisterUserErrors
  ) {
    if (errors.password) {
      return errors.password.join('. ');
    }
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      return 'Passwords do not match';
    }
  
    return '';
  }

function RegistrationForm({onSubmit, errors}: {onSubmit: (formData: RegisterUserType)=>void, errors:RegisterUserErrors}): JSX.Element {

    const [formData, setFormData] = useState <UserRegistrationDataType> (
        {
            username: "",
            email: "",
            password: "",
            confirmPassword: "", 
        }
    )
    
    return (
    <RegistrationFormWrapper>
        <Input            
            onChange={(e) => {
            setFormData((prevState) => ({...prevState, username: e.target.value }));
            }}
            name="Name"
            label="Name"
            autoComplete="text"
        />
        <Input       
            onChange={(e) => {
            setFormData((prevState) => ({...prevState, email: e.target.value})); 
            }}
            type="email"
            name="email"
            label="Email"
            autoComplete="email"
        />
        <Input        
            onChange={(e) => {
            setFormData((prevState) => ({
            ...prevState, password: e.target.value }));}}
            label="Password"
            type="password"
            autoComplete="off"
        />
        <Input
            onChange={(e) => {
            setFormData((prevState) => ({
            ...prevState, confirmPassword:e.target.value }));}}
            label="Confirm Password"
            type="password"
            autoComplete="off"
        />  
        <Error>{getPasswordErrors(formData, errors)}</Error>
      <Button 
        disabled = {
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            formData.password !== formData.confirmPassword ? "disabled": ""
        }
        maxWidth = '100%'
        url={AppRoute.Registration}
        click={
            ()=>{onSubmit ({
                username: formData.username,
                email: formData.email,
                password: formData.password
            })        
        }}
        >Registration
       </Button> 
    </RegistrationFormWrapper>); 
}

export default RegistrationForm;
