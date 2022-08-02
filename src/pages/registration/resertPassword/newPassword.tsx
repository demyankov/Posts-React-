import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { ConfirmPasswordResert} from "../../../api/newPassword";
import Button from "../../../components/button/button";
import Input from "../../../components/input/input";
import { FormWrapper, H2, Wrapper } from "./resertPasswordStyles"

function NewPassword(): JSX.Element {
const {uid, token} = useParams <{uid:string, token:string }> ()

  const [newPassword, setNewPassword] = useState({"password":"","confirmPassword":""}) 
  const [isPasswordResert, setPasswordResert] = useState(false);
  const [isLoading, setLoadingState] = useState(false);
  const [errors, setErrors] = useState({});  

  return (
      <Wrapper>
          <Link to="/">Back to Home</Link> 
          <H2>New password</H2> 
          
          <FormWrapper>
            {!isPasswordResert ?(
              <>
               <Input type = "password" label = "Password" onChange={(e)=>{setNewPassword({...newPassword, "password": e.target.value})}}/>
               <Input type = "password" label = "Confirm password" onChange={(e)=>{setNewPassword({...newPassword, "confirmPassword": e.target.value})
               }}/>
              <Button maxWidth="100%" disabled = {
            !newPassword.password ||
            !newPassword.confirmPassword || newPassword.password !== newPassword.confirmPassword ? "disabled": ""
        } click = {()=>{
            if (uid && token) {
                setLoadingState(true)
                ConfirmPasswordResert({"uid": uid, "token": token, "new_password": newPassword.password})
                .then(()=>{
                  setLoadingState(false)
                  setPasswordResert(true)                
              }
                  ).catch((errors)=>{
                  setLoadingState(false)
                  setErrors(errors)               })              
               }}}url="">Resert</Button>
               </>)
          :(
            <>
              <h3>Password successfully changed</h3>
              <Button maxWidth="100%" url="/signIn">Login</Button> 
            </>)
          }
          </FormWrapper>
        </Wrapper>
    )

}

export default NewPassword;