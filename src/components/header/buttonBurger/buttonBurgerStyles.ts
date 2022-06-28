import styled from '@emotion/styled'

export const BurgerBtn = styled.a`
display: block;
position: relative;
margin-right: 1rem;
width: 2rem;
height: 1.6rem;
border: none;
background: none;
cursor: pointer;
`

export const BurgerBtnItem = styled.span`
display: block;
position: absolute;
height: 3px;
width: 100%;
top: 0;
left: 0;
background-color: blue;
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
`
  

 
  