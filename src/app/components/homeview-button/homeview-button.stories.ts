import { moduleMetadata } from '@storybook/angular';
import { HomeviewButtonComponent } from './homeview-button.component';

export default {
  title: 'homeview/button',
  component: HomeviewButtonComponent,
  //decorators: [metadata],
};

export const Default = () => ({});

Default.story = {
  name: 'homeview-button',
};
