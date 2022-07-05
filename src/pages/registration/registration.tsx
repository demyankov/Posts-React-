import React, { useState } from "react";
import { RegisterUser, RegisterUserResponseType, RegisterUserType } from "../../api/registerUser";

import LoginRegistration from "../../components/login_registration/login_registration";
import RegistrationForm from "./registrationForm";
import Confirmation from "./registrationResult/confirmation";
import {RegistrationWrapper} from "./registrationStyles";

function Registration(): JSX.Element {

  const [registerData, setRegisterData] = useState<RegisterUserResponseType | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
    return (      
    !registerData?
    <RegistrationWrapper>
       <LoginRegistration />
      <RegistrationForm 
         onSubmit = {(formData:RegisterUserType) =>{
          setLoading(true)
          RegisterUser(formData).then(
            (data)=>{
              setRegisterData(data)
              setLoading(false)
              console.log(data)
            }
          ).catch ((errors)=>{
            setErrors(errors)
            console.log(errors)
            setLoading(false)
          }
          )
        }}
     />
    </RegistrationWrapper>
    : <Confirmation>{registerData.email} </Confirmation> 
    ); 
}

export default Registration;
