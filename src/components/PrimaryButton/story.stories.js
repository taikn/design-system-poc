import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import PrimaryButton from './index'

export default {
  title: 'Components|Buttons',
  component: PrimaryButton
}

export const Primary = () =>
  <PrimaryButton
    alternate={boolean('Alternate')}
    awaiting={boolean('Awaiting')}
    onClick={action('button-click')}
  >
    {text('Label', 'Verify your email')}
  </PrimaryButton>
