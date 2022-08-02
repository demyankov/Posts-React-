import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: var(--spacing-1);
  min-width: 100%;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40%;
  gap: var(--spacing-6);
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: var(--spacing-6);
  justify-content: flex-end;
`;

export const ButtonAddImage = styled.button<{ isDragging?: boolean }>`
  font-size: var(--body-font-size);
  background-color: var(--color-bg-button);
  border-radius: var(--spacing-7);
  padding: var(--spacing-8);
  color: #fff;
  border: var(--color-bg-secondary) 2px solid;

  &:hover {
    color: rgb(0, 0, 255);
    background-color: #fff;
  }

  ${({ isDragging }) =>
    isDragging
      ? css`
          color: var(--color-error);
        `
      : null}
`;

export const ImageWrapper = styled.div`
  margin-top: var(--spacing-6);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-7);
`;

export const ButtonImageWrapper = styled.div`
  display: flex;
  gap: var(--spacing-7);
`;
