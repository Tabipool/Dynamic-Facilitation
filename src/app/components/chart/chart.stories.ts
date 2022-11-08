import { moduleMetadata } from '@storybook/angular';
import { ChartComponent } from './chart.component';

export default {
  title: 'general/chart',
  component: ChartComponent,
  //decorators: [metadata],
};

export const Default = () => ({});

Default.story = {
  name: 'component',
};
