import styled from 'styled-components'
import { typography } from '../../designTokens'

const StyledButton = styled.button`
  font-family: ${typography.type.primary};
  text-transform: uppercase;
  font-weight: ${typography.weight.semibold};
  font-size: ${typography.size.s3};
  line-height: 1;
  padding: 0.625rem 0.5rem;
  outline: none;
  user-select: none;
  cursor: pointer;
  border-radius: 0;
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
