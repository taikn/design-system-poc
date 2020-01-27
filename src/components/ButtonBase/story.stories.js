import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

export default {
  title: 'Components|Button',

  parameters: {
    name: 'Overview',
    component: PrimaryButton,
    componentSubtitle: 'Button provides a simple way to trigger an event'
  }
}

export const Overview = () =>
  <React.Fragment>
    <PrimaryButton>
      Push it
    </PrimaryButton>
    <SecondaryButton>
      Cancel
    </SecondaryButton>
    <PrimaryButton alternate>
      Alternate action
    </PrimaryButton>
    <SecondaryButton alternate>
      Alternate cancel
    </SecondaryButton>
  </React.Fragment>
