import React from 'react'
import PropTypes from 'prop-types'

import { color } from '../../designTokens';
import {
  StyledButton,
  StyledContentsWrapper,
  StyledContents,
  SpinnerWrapper
} from './styles'
import Spinner from '../Spinner';

const Button = ({ children, awaiting, disabled, ...rest }) => (
  <StyledButton
    disabled={disabled || awaiting}
    {...rest}
  >
    <StyledContentsWrapper>
      <StyledContents>
        {children}
      </StyledContents>
      {awaiting &&
        <SpinnerWrapper>
          <Spinner fill={color.white} size='0.75rem' />
        </SpinnerWrapper>}
    </StyledContentsWrapper>
  </StyledButton>
)

Button.propTypes = {
  awaiting: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

Button.defaultProps = {
  type: 'button'
}

export default Button
