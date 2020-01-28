import React from 'react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { GlobalStyle } from '../src/globalStyles.js';

addDecorator(withKnobs);
addDecorator(story => (
  <React.Fragment>
    <GlobalStyle />
      {story()}
  </React.Fragment>
));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
});
