import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-5);
  min-height: 100vh;
  width: 40%;
  min-width: 300px;
`;

export const MainTitle = styled.div`
  font-size: var(--headline-2-font-size);
  font-weight: var(--headline-2-font-weight);

  & span {
    font-size: var(--headline-2-font-size);
    color: var(--color-primary);
  }
`;

export const Content = styled.p`
  text-align: justify;
`;
