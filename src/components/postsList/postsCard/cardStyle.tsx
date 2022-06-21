import styled from '@emotion/styled'

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
flex-basis: 29%;
gap: 1rem;
min-width: 400px;
min-height: 100%;
background-color: #fff;
padding: 20px;
border-radius: 1rem;  
`
export const CardImageWrapper = styled.div`
width: 100%;
max-height: 250px;
overflow: hidden;
`

export const CardImage = styled.img`
width: 100%;
height: auto;
object-fit: cover;
`
export const CardTitle = styled.h3`
font-size: 1.2rem;
font-weight: 700;
`
export const CardText = styled.p`
font-size: 1rem;
flex: 1;
`
export const CardDate = styled.p`
font-size: 1rem;
color: blue;
` 