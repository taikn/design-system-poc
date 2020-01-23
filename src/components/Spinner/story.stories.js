import React from "react";
import Spinner from './index';
import { select } from '@storybook/addon-knobs';
import { Wrapper } from "../../storiesStyles";
import { color } from "../../designTokens";

export default {
  title: "Spinner"
};

export const DefaultSpinner = () => 
  <Wrapper>
    <Spinner
      size={select('Size', ['8px', '1rem', '24px', '36px'])}
      fill={select('Fill color', [color.mediumdark, color.red, color.yellow, color.black])} />
  </Wrapper>
;
