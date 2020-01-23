import React from "react";
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PrimaryButton from './index';

export default {
  title: "Buttons"
};

export const Primary = () =>
  <PrimaryButton
    onClick={action('button-click')}
    awaiting={boolean('Awaiting')}
  >
    {text("Label", "Verify your email")}
  </PrimaryButton>;
