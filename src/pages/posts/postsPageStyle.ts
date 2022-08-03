import styled from "@emotion/styled";

export let SectionPostsHeader = styled.div`
  margin-top: var(--spacing-1);
  display: flex;
  min-height: 100%;
  align-items: center;
  gap: var(--spacing-7);
`;
export let SectionPosts = styled.div`
  padding: var(--spacing-7) 0;
`;
export let PostsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-7);
  margin-top: var(--spacing-4);
`;

export let PostsMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-7);
  flex: 1;
`;
export let PostsPromo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  overflow-y: auto;
  gap: var(--spacing-7);
  min-width: 21rem;
  padding: var(--spacing-8);
  border-radius: var(--spacing-7);
  background-color: #aaa;
`;
