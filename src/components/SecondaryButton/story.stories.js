import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import SecondaryButton from './index'

export default {
  title: 'Components|Button'
}

export const Secondary = () =>
  <SecondaryButton
    alternate={boolean('Alternate')}
    awaiting={boolean('Awaiting')}
    onClick={action('button-click')}
  >
    {text('Label', 'Start all over')}
  </SecondaryButton>

Secondary.story = {
  parameters: {
    docs: {
      page: null
    }
  }
}
