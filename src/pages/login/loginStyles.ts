import styled from "@emotion/styled";

export const SignInWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: clamp(340px, 30%, 500px);
  margin-left: auto;
  margin-right: auto;
`;

export const Resert = styled.p`
  & a {
    color: var(--color-text-secondary);
  }
`;

export const P = styled.p`
  text-align: center;
  font-size: var(--body-font-size);

  & span {
    font-size: var(--body-font-size);
    color: var(--color-text-secondary);
  }
`;
