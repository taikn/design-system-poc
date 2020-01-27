import React from 'react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { GlobalStyle } from '../src/globalStyles.js';

addDecorator(withKnobs);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
});

// automatically import all files ending in *.stories.js|mdx
configure(
  [
    require.context('../src', false, /Intro\.stories\.mdx/),
    require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);
