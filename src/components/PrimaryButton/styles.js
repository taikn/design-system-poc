import styled from 'styled-components'
import { color, typography } from '../../designTokens'

const StyledButton = styled.button`
  font-family: ${typography.type.primary};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
  width: 100%;
  padding: 0.625rem 0.5rem;
  color: ${color.white};
  border: 0.125rem solid ${color.red};
  background-color: ${color.red};
  outline: none;
  user-select: none;
  cursor: pointer;

  :hover
  {
    border-color: #FF443A;
    background-color: #FF443A;
  }

  :disabled
  {
    border-color: ${color.medium};
    background-color: ${color.medium};
    pointer-events: none;
    cursor: default;
  }

  @media screen and (min-width: 25rem)
  {
    width: auto;
  }
`

const StyledContentsWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
`

const StyledContents = styled.span`
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  height: 1.5rem;
  padding: 0 0.5rem;
`

const SpinnerWrapper = styled.span`
  display: flex;
`

export {
  StyledButton,
  StyledContentsWrapper,
  StyledContents,
  SpinnerWrapper
}