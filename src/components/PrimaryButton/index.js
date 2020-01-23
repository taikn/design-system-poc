import React from 'react'
import PropTypes from 'prop-types'

import {
  StyledButton,
  StyledContentsWrapper,
  StyledContents,
  SpinnerWrapper
} from './styles'

const Button = ({ children, awaiting, primary, ...rest }) => (
  <StyledButton primary={primary} {...rest}>
    <StyledContentsWrapper>
      <StyledContents>
        {children}
      </StyledContents>
      {awaiting &&
        <SpinnerWrapper>
          <SpinnerCircle color={primary ? '#fff' : '#c6c6c6'} />
        </SpinnerWrapper>}
    </StyledContentsWrapper>
  </StyledButton>
)

Button.propTypes = {
  primary: PropTypes.bool,
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
