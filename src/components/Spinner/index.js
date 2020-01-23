import React from 'react'
import PropTypes from 'prop-types'
import { color } from '../../designTokens'

import {
  StyledSpinner
} from './styles'

const Spinner = (props) => (
  <StyledSpinner {...props} />
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
