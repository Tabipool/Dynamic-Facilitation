import { moduleMetadata } from '@storybook/angular';
import { HomeviewMeetingComponent } from './homeview-meeting.component';

export default {
  title: 'homeview/meeting',
  component: HomeviewMeetingComponent,
  //decorators: [metadata],
};

export const Default = () => ({});

Default.story = {
  name: 'homeview-meeting',
};
