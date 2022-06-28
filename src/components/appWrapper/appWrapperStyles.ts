import styled from "@emotion/styled"

export const Wrapper = styled.div<{currentTheme:any}>`
padding: 1rem;
min-height: 100vh;
background-color: ${props => props.currentTheme?.colors?.background};
background-color: ${props => props.currentTheme?.colors?.color};
`