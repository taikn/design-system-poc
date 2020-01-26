import React from 'react'
import PropTypes from 'prop-types'

import { color } from '../../designTokens'
import {
  StyledSecondaryButton
} from './styles'
import {
  StyledContentsWrapper,
  StyledContents,
  SpinnerWrapper
} from '../ButtonBase/styles'
import Spinner from '../Spinner'

const SecondaryButton = ({ children, awaiting, disabled, ...rest }) => (
  <StyledSecondaryButton
    disabled={disabled || awaiting}
    {...rest}
  >
    <StyledContentsWrapper>
      <StyledContents>
        {children}
      </StyledContents>
      {awaiting &&
        <SpinnerWrapper>
          <Spinner fill={color.medium} size='0.75rem' />
        </SpinnerWrapper>}
    </StyledContentsWrapper>
  </StyledSecondaryButton>
)

SecondaryButton.propTypes = {
  alternate: PropTypes.bool,
  awaiting: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

SecondaryButton.defaultProps = {
  type: 'button'
}

export default SecondaryButton
