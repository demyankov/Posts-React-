import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-size: var(--body-font-size);
`;

export const InputTag = styled.input`
  min-width: 100%;
  padding: 0.5rem 1rem;
  border-color: blue;
  border-radius: 20px;
  font-size: var(--body-font-size);
`;
