import React from 'react'
import PropTypes from 'prop-types'

import { color } from '../../designTokens'
import {
  StyledPrimaryButton
} from './styles'
import Spinner from '../Spinner'
import {
  StyledContentsWrapper,
  StyledContents,
  SpinnerWrapper
} from '../ButtonBase/styles'

const PrimaryButton = ({ children, awaiting, disabled, ...rest }) => (
  <StyledPrimaryButton
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
  </StyledPrimaryButton>
)

PrimaryButton.propTypes = {
  /**
    Alternative, dark grey button appearance
  */
  alternate: PropTypes.bool,
  /**
    Use the awaiting state to indicate that action is still in progress, disables button
  */
  awaiting: PropTypes.bool,
  /**
    Button label
  */
  children: PropTypes.node.isRequired,
  /**
    Avoid duplicate actions by passing a disabled flag to the button
  */
  disabled: PropTypes.bool,
  /**
    React event handler
  */
  onClick: PropTypes.func,
  /**
    Available types are: submit, button or reset
  */
  type: PropTypes.string
}

PrimaryButton.defaultProps = {
  type: 'button'
}

export default PrimaryButton
