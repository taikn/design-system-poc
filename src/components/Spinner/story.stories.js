import React from 'react'
import DefaultSpinner from './index'
import { select } from '@storybook/addon-knobs'
import { color } from '../../designTokens'

export default {
  title: 'Loading indicators'
}

export const Spinner = () =>
  <DefaultSpinner
    size={select('Size', ['1rem', '8px', '24px', '36px'])}
    fill={select('Fill color', [color.mediumdark, color.red, color.yellow, color.black])}
  />
