import { moduleMetadata, type Meta, type StoryFn } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { CommonUiModule } from '../../common-ui.module';

export default {
  component: NavbarComponent,
  title: 'NavbarComponent',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      //declarations: [PrimaryDirective],
      imports: [CommonUiModule],
    }),
  ],
  argTypes: {
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

export const CustomText: StoryFn = Template.bind({});
CustomText.args = { texto: 'Texto por defecto' };
