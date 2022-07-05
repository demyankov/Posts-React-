import { useState } from "react";
import { Link } from "react-router-dom";
import { requestResertPassword } from "../../../api/requestResertPassword";
import Button from "../../../components/button/button";
import Input from "../../../components/input/input";
import { FormWrapper, H2, Wrapper } from "./resertPasswordStyles";



function RequestResertPassword(): JSX.Element {
      const [email, setEmail] = useState({"email":""})
      const [isEmailSent, setEmailSent] = useState(false)
      const [isLoading, setLoadingState] = useState(false);
      const [errors, setErrors] = useState({});
        
      return (
        <Wrapper>
          <Link to="/">Back to Home</Link> 
          <H2>Resert password</H2> 
          <FormWrapper>
            {!isEmailSent?(
              <>
              <Input label = "Email" type="email" onChange={(e)=>{setEmail({"email":e.target.value})}}/>
              <Button maxWidth="100%" disabled = {!email.email || isLoading ? "disabled": ""}
              click = {()=>{
                setLoadingState(true)
                requestResertPassword(email).then(()=>{
                  setLoadingState(false)
                  setEmailSent(true)}
                  ).catch((errors)=>{
                  setLoadingState(false)
                  setErrors(errors)})
              }} url="">Resert</Button>
              </>)
              :(
                <>
                <p>You will receive an email <strong>{`${email.email}`}</strong> with a link to reset your password!</p>
                <Button maxWidth="100%" url="/">Back to Home</Button>
                </>
              ) 
              }
          </FormWrapper>
        </Wrapper>
      )

  }
  
  export default RequestResertPassword;