import { TextWrapper } from "./textStyles";

function Text(): JSX.Element {
  return (
    <div>
      <TextWrapper>
        Please activate your account with the activation link in the email
        <span> demyantaurus@mail.ru</span>
      </TextWrapper>
      <TextWrapper>Please check your email</TextWrapper>
    </div>
  );
}

export default Text;
