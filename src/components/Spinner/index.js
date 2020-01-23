import React from 'react'
import PropTypes from 'prop-types'
import { color } from '../../designTokens'

import {
  StyledRectContainer,
  StyledTopRect,
  StyledLeftRect
} from './styles'

const Spinner = ({ size, fill }) => (
  <StyledRectContainer size={size}>
    <StyledTopRect fill={fill} />
    <StyledLeftRect fill={fill} />
  </StyledRectContainer>
)

Spinner.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string
}

Spinner.defaultProps = {
  size: '1rem',
  fill: `${color.mediumdark}`
}

export default Spinner
