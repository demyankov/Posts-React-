import styled from "@emotion/styled";

export let CardWrapper = styled.div`
display: flex;
flex-direction: column;
flex-basis: 30%;
gap: 1rem;
min-width: 300px;
min-height: 100%;
background-color: #fff;
padding: 20px;
border-radius: 1rem;
`
export let CardImageWrapper = styled.div`
width: 100%;  
height: 200px;
overflow: hidden;
`
export let CardImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
export let CardTitle = styled.h3`
font-size: 1.2rem;
font-weight: 700;
`
export let CardText = styled.p`
font-size: 1rem;
flex: 1;
`
export let CardDate = styled.p`
font-size: 1rem;
color: blue;
`
 