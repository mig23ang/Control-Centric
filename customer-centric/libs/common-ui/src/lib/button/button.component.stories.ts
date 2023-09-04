import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonUiModule } from '../common-ui.module';

export default {
  component: ButtonComponent,
  title: 'ButtonComponent',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      //declarations: [PrimaryDirective],
      imports: [CommonUiModule],
    }),
  ],
  argTypes: {
    isPrimary: {
      control: 'boolean',
      defaultValue: true,
      description: 'Primary button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    isSecondary: {
      control: 'boolean',
      defaultValue: true,
      description: 'Secondary button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    customText: {
      control: 'text',
      defaultValue: 'texto del botón',
      description: 'texto del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'texto del botón' },
      },
    },
  },
} as Meta;

const Template: StoryFn = (args: any) => ({ props: args });

export const Default: StoryFn = Template.bind({});

export const Primary: StoryFn = Template.bind({});
Primary.args = { isPrimary: true };

export const Secondary: StoryFn = Template.bind({});
Secondary.args = { isSecondary: true };

export const CustomText: StoryFn = Template.bind({});
CustomText.args = { texto: 'Texto por defecto' };
