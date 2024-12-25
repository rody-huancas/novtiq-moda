import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  component: Modal,
  argTypes: {
    isOpen: {
      description: "Determines whether the modal is open or closed.",
      control: { type: "boolean" },
    },
    title: {
      description: "The title displayed in the modal header.",
      control: { type: "text" },
    },
    size: {
      description: "Specifies the size of the modal.",
      options: ["sm", "md", "lg", "full"],
      control: { type: "select" },
    },
    position: {
      description: "Specifies the position of the modal on the screen.",
      options: ["top", "center", "bottom"],
      control: { type: "radio" },
    },
    hasOverlay: {
      description: "Determines whether the modal includes an overlay.",
      control: { type: "boolean" },
    },
    closeOnOverlayClick: {
      description: "Closes the modal when clicking on the overlay.",
      control: { type: "boolean" },
    },
    showCloseButton: {
      description: "Determines whether the close button is displayed.",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <div>
        <button
          className="bg-indigo-600 py-3 px-5 rounded-lg text-white"
          onClick={handleOpen}
        >
          Open
        </button>
        <Modal {...args} isOpen={isOpen} onClose={handleClose}>
          <p>This is the modal content. You can add any custom content here.</p>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Example Modal",
    size: "md",
    position: "center",
    hasOverlay: true,
    closeOnOverlayClick: true,
    showCloseButton: true,
  },
};
