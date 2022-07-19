import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-5);
`;
export const ImageWrapper = styled.div`
  flex-basis: 80%;
  height: 100%;
  max-height: 40%;
`;
export const PostTitle = styled.h3`
  font-size: var(--spacing-4);
  color: var(--color-text);
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PostText = styled.p`
  padding: var(--spacing-5);
`;
