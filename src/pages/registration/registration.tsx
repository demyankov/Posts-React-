import React, { useState } from "react";
import { RegisterUser, RegisterUserErrors, RegisterUserResponseType, RegisterUserType } from "../../api/registerUser";

import LoginRegistration from "../../components/login_registration/login_registration";
import RegistrationForm from "./registrationForm";
import Confirmation from "./registrationResult/confirmation";
import {RegistrationWrapper} from "./registrationStyles";

function Registration(): JSX.Element {

  const [registerData, setRegisterData] = useState<RegisterUserResponseType | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState <RegisterUserErrors> ({});

    return (      
    !registerData?
    <RegistrationWrapper>
       <LoginRegistration />
      <RegistrationForm 
        isLoading
         onSubmit = {(formData:RegisterUserType) =>{
          setLoading(true)
          RegisterUser(formData).then(
            (data)=>{
              setRegisterData(data)
              setLoading(false)             
            }
          ).catch (({errors})=>{
            setErrors(errors as RegisterUserErrors)
            setLoading(false)
          }
          )
        }}
        errors={errors}
     />
    </RegistrationWrapper>
    : <Confirmation>{registerData.email} </Confirmation> 
    ); 
}

export default Registration;
