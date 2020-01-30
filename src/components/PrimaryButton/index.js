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

const PrimaryButton = ({ label, children, isLoading, disabled, ...rest }) => (
  <StyledPrimaryButton
    disabled={disabled || isLoading}
    {...rest}
  >
    <StyledContentsWrapper>
      <StyledContents>
        {label || children}
      </StyledContents>
      {isLoading &&
        <SpinnerWrapper>
          <Spinner fill={color.white} size='0.75rem' />
        </SpinnerWrapper>}
    </StyledContentsWrapper>
  </StyledPrimaryButton>
)

PrimaryButton.propTypes = {
  id: PropTypes.string,
  /**
    Alternative, dark grey button appearance
  */
  alternate: PropTypes.bool,
  /**
    Use the isLoading state to indicate that action is still in progress, disables button
  */
  isLoading: PropTypes.bool,
  /**
    Button label
  */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
    Button label (optional)
  */
  children: PropTypes.node,
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
