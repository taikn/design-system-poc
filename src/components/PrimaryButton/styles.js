import styled, { css } from 'styled-components'
import { color, typography } from '../../designTokens'
import { lighten } from 'polished'

const StyledButton = styled.button`
  font-family: ${typography.type.primary};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
  padding: 0.625rem 0.5rem;
  color: ${color.white};
  border: ${props => props.alternate
    ? css`
      0.125rem solid ${color.dark}
    `
    : css`
      0.125rem solid ${color.red}
    `};
  background-color: ${props => props.alternate
    ? color.dark
    : color.red};
  outline: none;
  user-select: none;
  cursor: pointer;

  :hover
  {
    border-color: ${props => props.alternate
      ? lighten(0.05, color.dark)
      : lighten(0.05, color.red)};
    background-color: ${props => props.alternate
      ? lighten(0.05, color.dark)
      : lighten(0.05, color.red)};
  }

  :disabled
  {
    border-color: ${color.medium};
    background-color: ${color.medium};
    pointer-events: none;
    cursor: default;
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
  padding: 0 0.5rem 0 0;
`

export {
  StyledButton,
  StyledContentsWrapper,
  StyledContents,
  SpinnerWrapper
}
