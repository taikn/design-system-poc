import styled from 'styled-components'
import { color } from '../../designTokens'
import { lighten } from 'polished'
import { StyledButton } from '../ButtonBase/styles'

const StyledSecondaryButton = styled(StyledButton)`
  color: ${props => props.alternate
    ? color.dark
    : color.red};
  border: 0.125rem solid ${props => props.alternate
    ? color.dark
    : color.red};
  background-color: transparent;

  :hover
  {
    border-color: ${props => props.alternate
      ? lighten(0.05, color.dark)
      : lighten(0.05, color.red)};
    color: ${props => props.alternate
      ? lighten(0.05, color.dark)
      : lighten(0.05, color.red)};
  }

  :disabled
  {
    border-color: ${color.medium};
    color: ${color.medium};
    pointer-events: none;
    cursor: default;
  }
`

export {
  StyledSecondaryButton
}
