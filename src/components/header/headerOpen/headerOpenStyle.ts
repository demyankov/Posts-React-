import styled from "@emotion/styled";

export const Wrapper = styled.div`
flex:1;
display: grid;
grid-template-columns: auto 1fr auto;
grid-column-gap: 2rem;

div {
  display:flex;
  flex-direction: column;
  gap:1rem;
}

a {
    font-size: 1.2rem;
}

a.active {
  color:blue;
}

`
