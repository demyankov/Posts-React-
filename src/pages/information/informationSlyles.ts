import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: var(--spacing-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-5);
`;

export const TabBar = styled.ul`
  display: flex;
  gap: var(--spacing-5);
`;

export const Text = styled.p`
  max-width: 60%;
  font-size: var(--body-font-size);
`;
