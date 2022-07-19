import styled from "@emotion/styled";

export const ActiveTab = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-bg-secondary);
  color: var(--color-text-invert);
  border-radius: var(--spacing-5);
  font-size: var(--body-font-size);
`;

export const DisActiveTab = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-bg-disabled);
  color: var(--color-text-invert);
  border-radius: var(--spacing-5);
  font-size: var(--body-font-size);
`;
