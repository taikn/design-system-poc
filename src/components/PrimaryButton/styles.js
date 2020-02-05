import styled from 'styled-components'
import { color } from '../../designTokens'
import { lighten } from 'polished'
import { StyledButton } from '../ButtonBase/styles'

const StyledPrimaryButton = styled(StyledButton)`
  color: ${color.white};
  border: 0.125rem solid ${props => props.alternate
    ? color.dark
    : color.red};
  background-color: ${props => props.alternate
    ? color.dark
    : color.red};

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

export {
  StyledPrimaryButton
}
