import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    min-height: 100vh;
    width: 30%;
    min-width: 500px;
`

export const MainTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
    
    & span {
        font-size: 40px;
        color: blue;
    }
`

export const Content = styled.p`
    font-size: 1.5rem;
    text-align: justify;
`