import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { AddButtonComponent } from './add-button.component';

const metadata = moduleMetadata({
  imports: [],
});

export default {
  title: 'general/add-Button',
  component: AddButtonComponent,
  //decorators: [metadata],
} as Meta;

const Template: Story<AddButtonComponent> = (args: AddButtonComponent) => ({
  props: args,
});

export const Flipchart = Template.bind({});
Flipchart.args = {
  flipchart: true,
};

export const Issues = Template.bind({});
Issues.args = {
  flipchart: false,
};
