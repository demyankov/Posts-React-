import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export let CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 48%;
  width: 100%;
  gap: var(--spacing-7);
  min-width: 300px;
  background-color: #ddd;
  padding: 20px;
  border-radius: var(--spacing-7);
`;
export let CardImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;
export let CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export let CardTitle = styled(NavLink)`
  font-weight: 700;
  color: #323537;

  &.active {
    color: red;
  }
`;

export let CardText = styled.p`
  flex: 1;
`;

export let CardDate = styled.p`
  color: blue;
`;
