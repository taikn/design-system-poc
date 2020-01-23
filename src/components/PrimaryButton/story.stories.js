import React from "react";
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PrimaryButton from './index';
import { Wrapper } from "../../storiesStyles";

export default {
  title: "PrimaryButton"
};

export const Primary = () =>
  <Wrapper>
    <PrimaryButton
      onClick={action('button-click')}
      awaiting={boolean('Awaiting')}
    >
      {text("Label", "Verify your email")}
    </PrimaryButton>
  </Wrapper>;
