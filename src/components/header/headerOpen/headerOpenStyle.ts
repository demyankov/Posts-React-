import styled from "@emotion/styled";

export const Wrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: var(--spacing-5);

  div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-7);
  }

  a {
    font-size: var(--body-font-size);
    color: var(--color-text);
  }

  a.active {
    color: var(--color-primary);
  }
`;
