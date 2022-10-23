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

export const Default: Story<AddButtonComponent> = (addButtonComponent) => ({
  props: addButtonComponent,
});
