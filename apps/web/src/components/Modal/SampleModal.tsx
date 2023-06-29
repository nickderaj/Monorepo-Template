'use client'

import { Button, Modal } from 'ui'

const SampleModal = ({toggleModal, isOpen}) => {
  return (
    <Modal title="Sample Modal" onClose={toggleModal} isOpen={isOpen}>
    <div className="w-full flex justify-center items-center mb-4">
      <Button onClick={toggleModal}>Close</Button>
    </div>
  </Modal>
  )
}

export default SampleModal