import { addons } from '@storybook/addons';
import '@storybook/addon-docs';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register';
import defaultTheme from './defaultTheme';

addons.setConfig({
  theme: defaultTheme,
});
