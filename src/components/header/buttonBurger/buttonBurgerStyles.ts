import styled from "@emotion/styled";

export const BurgerBtn = styled.a`
  display: block;
  position: relative;
  margin-right: var(--spacing-7);
  width: var(--spacing-5);
  height: var(--spacing-6);
  border: none;
  background: none;
  cursor: pointer;
`;

export const BurgerBtnItem = styled.span`
  display: block;
  position: absolute;
  height: var(--spacing-9);
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-bg-secondary);
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;

  &:nth-of-type(1) {
    width: 70%;
  }

  &:nth-of-type(2) {
    top: 0.7rem;
  }

  &:nth-of-type(3) {
    top: 1.4rem;
  }
`;
