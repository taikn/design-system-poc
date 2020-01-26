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
  alternate: PropTypes.bool,
  awaiting: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

PrimaryButton.defaultProps = {
  type: 'button'
}

export default PrimaryButton
