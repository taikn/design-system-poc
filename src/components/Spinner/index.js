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
  /**
    Spinner size - dont use spinner smaller than 8px
  */
  size: PropTypes.string,
  /**
    Spinner fill color
  */
  fill: PropTypes.string
}

Spinner.defaultProps = {
  size: '1rem',
  fill: `${color.mediumdark}`
}

export default Spinner
