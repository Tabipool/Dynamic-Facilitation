import { moduleMetadata } from '@storybook/angular';
import { ModeratorDetailedComponent } from './moderator-detailed.component';

export default {
  title: 'homeview/moderator/moderatorDetailed',
  component: ModeratorDetailedComponent,
  //decorators: [metadata],
};

export const Default = () => ({});

Default.story = {
  name: 'moderatorDetailed',
};
