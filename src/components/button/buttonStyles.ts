import styled from "@emotion/styled";

export let ButtonWrapper = styled.div<{ maxWidth: string }>`
  max-width: ${(props) => props.maxWidth};
  width: 100%;
  height: auto;

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--color-bg-button);
    border: var(--color-bg-secondary) 2px solid;
    color: #fff;
    border-radius: 30px;
    font-size: var(--body-font-size);
    text-align: center;
    max-width: 100%;
    width: 100%;

    &.disabled {
      pointer-events: none;
      cursor: default;
      background-color: var(--color-bg-disabled);
      border: #aaa 2px solid;
    }

    &:hover {
      background-color: #fff;
      color: blue;
    }
  }
`;
