import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ObjectiveComponent from './ObjectiveComponent';
import './ObjectiveModal.css';

interface ObjectiveModalProps {
  open: boolean;
  handleClose: () => void;
}

const ObjectiveModal: React.FC<ObjectiveModalProps> = ({ open, handleClose }) => {
  return (
    <div>
      <Transition show={open} as={React.Fragment}>
        <Dialog as='div' className='relative z-50' onClose={handleClose}>
          <Transition.Child
            as={React.Fragment}
            enter='transition-opacity-enter transition-opacity-enter-from transition-opacity-enter-to'
            leave='transition-opacity-leave transition-opacity-leave-from transition-opacity-leave-to'
          >
            <div className='modal-overlay' />
          </Transition.Child>

          <div className='modal-container'>
            <Transition.Child
              as={React.Fragment}
              enter='transition-transform-enter transition-transform-enter-from transition-transform-enter-to'
              leave='transition-transform-leave transition-transform-leave-from transition-transform-leave-to'
            >
              <Dialog.Panel className='modal-panel'>
                <ObjectiveComponent handleClose={handleClose} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ObjectiveModal;
