import Button from "../../template/button/button";
import classes from "./success.module.css";
import Title from "./title/title";
import Text from "./text/text";
import styled from '@emotion/styled'
import {ButtonWrapper, SuccessWrapper} from './successStyles'


function Success(): JSX.Element {
  return (
    <SuccessWrapper>
      <Title />
      <Text />     
      <Button buttonText="Login" maxWidth = '15rem'/>
    </SuccessWrapper>
  );
}

export default Success;
