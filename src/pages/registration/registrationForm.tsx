import React, { useState } from "react";
import {RegisterUserType } from "../../api/registerUser";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { AppRoute } from "../../enums/router";
import { RegistrationFormWrapper } from "./registrationStyles";

interface UserRegistrationDataType {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function RegistrationForm({onSubmit}: {onSubmit: (formData: RegisterUserType)=>void}): JSX.Element {

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
            label="Name"
        />
        <Input       
            onChange={(e) => {
            setFormData((prevState) => ({...prevState, email: e.target.value})); 
            }}
            label="Email"
        />
        <Input        
            onChange={(e) => {
            setFormData((prevState) => ({
            ...prevState, password: e.target.value }));}}
            label="Password"
        />
        <Input
            onChange={(e) => {
            setFormData((prevState) => ({
            ...prevState, confirmPassword:e.target.value }));}}
            label="Confirm Password"
        />  
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
