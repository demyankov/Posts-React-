import Button from "../template/button/button";
import classes from "./success.module.css";
import Title from "./title/title";
import Text from "./text/text";
import styled from '@emotion/styled'
import {ButtonWrapper, SuccessWrapper} from './successStyles'


// const SuccessWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
//   align-items: center;
//   justify-content: center;
//   max-width: 50%;
//   min-height: 100vh;
//   margin-left: auto;
//   margin-right: auto;
// `

function Success(): JSX.Element {
  return (
    <SuccessWrapper>
      <Title />
      <Text />
      {/* <ButtonWrapper> */}
        <Button buttonText="Login" maxWidth = '15rem'/>
      {/* </ButtonWrapper> */}
    </SuccessWrapper>
  );
}

export default Success;
