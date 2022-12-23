import { moduleMetadata } from '@storybook/angular';
import { ModeratorHomeviewComponent } from './moderator-homeview.component';

export default {
  title: 'homeview/moderator/moderatorHomeview',
  component: ModeratorHomeviewComponent,
  //decorators: [metadata],
};

export const Default = () => ({});

Default.story = {
  name: 'moderatorHomeview',
};
