import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export let CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 48%;
  width: 100%;
  gap: 1rem;
  min-width: 300px;
  background-color: #ddd;
  padding: 20px;
  border-radius: 1rem;
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
  font-size: 1.2rem;
  font-weight: 700;

  &.active {
    color: red;
  }
`;
export let CardText = styled.p`
  font-size: 1rem;
  flex: 1;
`;
export let CardDate = styled.p`
  font-size: 1rem;
  color: blue;
`;
