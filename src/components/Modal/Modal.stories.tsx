import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Modal } from './Modal';
import './Modal.css';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    open: true,
    children: (
      <>
        <h2 style={{ marginTop: 0 }}>Hello 👋</h2>
        <p>This is a simple modal.</p>
      </>
    ),
  },
  argTypes: {
    onClose: { action: 'closed' },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

/**
 * Basic controlled example (args control visibility).
 */
export const Basic: Story = {};

/**
 * Self-managed example with an "Open Modal" button inside the story.
 */
export const WithTrigger: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Open Modal</button>

        <Modal
          {...args}
          open={open}
          onClose={() => {
            setOpen(false);
            // also trigger the Storybook action
            if (typeof args.onClose === 'function') args.onClose();
          }}
        >
          <h2 style={{ marginTop: 0 }}>Modal Title</h2>
          <p>Click outside or the × button to close.</p>
        </Modal>
      </div>
    );
  },
};

/**
 * Longer content to demonstrate scrolling within the modal content area.
 */
export const LongContent: Story = {
  args: {
    open: true,
    children: (
      <div>
        <h2 style={{ marginTop: 0 }}>Lots of content</h2>
        {[...Array(20)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            perferendis.
          </p>
        ))}
      </div>
    ),
  },
};
