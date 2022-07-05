import Button from "../../../components/button/button";
import { P } from "../../signIn/signInStyles";
import {SuccessWrapper} from './successStyles'
import Title from "../../../components/title/title";
import { AppRoute } from "../../../enums/router";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {activateUser } from "../../../api/activateUser";

function Success(): JSX.Element {
  const {uid, token } = useParams<{uid:string, token:string }>()

  const [errors, setErrors] = useState({});
  const [isLoading, setLoadingState] = useState(false);
  const [isActivated, setActivatedState] = useState(false);

  return (
    <SuccessWrapper>
    isActivated ? (
      <Title>Success</Title>
      <div> 
        <P>Activation successful. Email confirmed</P>  
        <P>Your registration is now completed</P>  
      </div>  
      <Button url = {AppRoute.SignIn} maxWidth = '15rem'>Login</Button>
      ) 
      : (
      <>
        <P>Activate your account</P> 
        <Button url = {AppRoute.SignIn} maxWidth = '15rem' disabled = {isLoading ? "disabled": ""} click={()=>{
            if (token && uid) {
              setLoadingState(true)
              activateUser ({uid, token}).then(
                ()=>{
                  setActivatedState(true)
                  setLoadingState(false)
                }).catch (
                  (errors)=>{
                    setLoadingState(false)
                    setErrors(errors)
                  }
                )
            }

        }}>Activate</Button>
      </>) 
    </SuccessWrapper>
  );
}

export default Success;
