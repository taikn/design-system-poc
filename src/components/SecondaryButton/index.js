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

const SecondaryButton = ({ label, children, isLoading, disabled, ...rest }) => (
  <StyledSecondaryButton
    disabled={disabled || isLoading}
    {...rest}
  >
    <StyledContentsWrapper>
      <StyledContents>
        {label || children}
      </StyledContents>
      {isLoading &&
        <SpinnerWrapper>
          <Spinner fill={color.medium} size='0.75rem' />
        </SpinnerWrapper>}
    </StyledContentsWrapper>
  </StyledSecondaryButton>
)

SecondaryButton.propTypes = {
  id: PropTypes.string,
  alternate: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
}

SecondaryButton.defaultProps = {
  type: 'button'
}

export default SecondaryButton
