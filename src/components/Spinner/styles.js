import styled, { keyframes } from 'styled-components'
import { color } from '../../designTokens'

const rotate = keyframes`
  0%
  {
    transform: rotate(0deg);
  }
  100%
  {
    transform: translate(-100%) rotate(90deg);
  }
`

const StyledSpinner = styled.div`
  height: ${props => props.size || '1rem'};
  width: ${props => props.size || '1rem'};
  background-color: ${props => props.fill || color.mediumdark};
  transform-origin: 100% 100%;
  transform: rotate(0deg);
  animation-name: ${rotate};
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
`

export {
  StyledSpinner
}