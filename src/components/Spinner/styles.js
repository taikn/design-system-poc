import styled, { keyframes } from 'styled-components'
import { color } from '../../designTokens'

const slideTop = keyframes`
  0%
  {
    top: 0%;
  }
  10%
  {
    top: 50%;
  }
  50%
  {
    top: 50%;
  }
  60%
  {
    top: 0%;
  }
  100%
  {
    top: 0%;
  }
`

const slideLeft = keyframes`
  0%
  {
    left: 0%;
  }
  10%
  {
    left: 50%;
  }
  50%
  {
    left: 50%;
  }
  60%
  {
    left: 0%;
  }
  100%
  {
    left: 0%;
  }
`


const StyledRectContainer = styled.div`
  position: relative;
  height: ${props => props.size || '1rem'};
  width: ${props => props.size || '1rem'};
`

const StyledRect = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: ${props => props.fill || color.mediumdark};
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier;
  animation-duration: 2s;
`

const StyledTopRect = styled(StyledRect)`
  width: 100%;
  height: 50%;
  animation-name: ${slideTop};
`

const StyledLeftRect = styled(StyledRect)`
  width: 50%;
  height: 100%;
  animation-delay: 0.5s;
  animation-name: ${slideLeft};
`

export {
  StyledRectContainer,
  StyledTopRect,
  StyledLeftRect
}