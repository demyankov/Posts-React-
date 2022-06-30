import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const RegistrationWrapper = styled.div`
display: flex;
justify-content: center;
`
export const RegistrationButton = styled(NavLink)`
display: inline-block;
font-size: 1.8rem;
padding: 0 0.8rem;

&:nth-of-type(1) {
  border-right: 3px solid #000;
}

&.active {
  color: blue;
}
`


