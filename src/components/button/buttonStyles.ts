
import styled from '@emotion/styled'

export let ButtonWrapper = styled.div<{maxWidth:string}>`
max-width: ${props => props.maxWidth} ;
width:100%;
height:auto;


a {  text-decoration: none;
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: blue;
    border: blue 2px solid;
    color: #fff;
    border-radius: 30px;
    font-size: 1.2rem;
    text-align: center;
    max-width: 100%;
    width: 100%;

   
  &.disabled {
    pointer-events: none;
    cursor: default;
    background-color: #bbb;
    border: #aaa 2px solid;
  }  

  &:hover {
    background-color: #fff;
    color: blue;
  }  
  }    

`

  