import styled from "@emotion/styled";

export const MainHeader = styled.header<{ open: boolean }>`
  position: absolute;
  padding-right: var(--spacing-5);
  width: 100%;
  overflow: hidden;
  display: flex;
  background-color: var(--color-bg);
  justify-content: space-between;
  gap: var(--spacing-7);
  margin-bottom: var(--spacing-5);
`;
