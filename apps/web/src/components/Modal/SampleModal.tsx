'use client';

import { Button, Modal } from '@packages/ui';

type Props = {
  toggleModal: () => void;
  isOpen: boolean;
};

const SampleModal: React.FC<Props> = ({ toggleModal, isOpen }) => {
  return (
    <Modal title="Sample Modal" onClose={toggleModal} isOpen={isOpen}>
      <div className="w-full flex justify-center items-center mb-4">
        <Button onClick={toggleModal}>Close</Button>
      </div>
    </Modal>
  );
};

export default SampleModal;
