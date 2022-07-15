import styled from "@emotion/styled";

export const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: clamp(340px, 30%, 500px);
  margin-left: auto;
  margin-right: auto;
`;

export const RegistrationFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 100%;
  width: 100%;
`;

export const P = styled.p`
  text-align: center;
  font-size: 1.2rem;

  & span {
    font-size: 1.2rem;
    color: blue;
  }
`;
