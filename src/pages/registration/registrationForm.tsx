import React, { useState } from "react";
import {RegisterUserErrors, RegisterUserType } from "../../api/registerUser";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { Error } from "../../components/styles/error";
import { AppRoute } from "../../enums/router";
import { getPasswordErrors } from "../../utils/getPasswordErrors";
import { UserRegistrationDataType } from "./RegistrationFormType";
import {RegistrationFormWrapper } from "./registrationStyles";

function RegistrationForm({isLoading, onSubmit, errors}: {isLoading:boolean, onSubmit: (formData: RegisterUserType)=>void, errors:RegisterUserErrors}): JSX.Element {

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
        {errors.username? <Error>{errors.username.join('. ')}</Error>: null}
        <Input       
            onChange={(e) => {
            setFormData((prevState) => ({...prevState, email: e.target.value})); 
            }}
            type="email"
            name="email"
            label="Email"
            autoComplete="email"
        />
        {errors.email? <Error>{errors.email.join('. ')}</Error>: null}
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
            !isLoading||
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
