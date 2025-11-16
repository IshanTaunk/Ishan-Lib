import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.css'; // ensure styles load in Storybook

// --- Storybook metadata ---
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['solid', 'outline', 'ghost'],
      description: 'Visual style of the button',
      defaultValue: 'solid',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      defaultValue: 'md',
    },
    onClick: { action: 'clicked' },
    children: { control: 'text', description: 'Button label' },
  },
  args: {
    children: 'Click me',
    variant: 'solid',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Stories ---

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};
