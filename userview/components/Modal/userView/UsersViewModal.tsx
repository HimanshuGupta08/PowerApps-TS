// UsersViewModal.tsx
import * as React from 'react';
import UsersViewModalContent from './UsersViewModalContent';
import './UsersViewModal.css';

interface UsersViewModalProps {
  open: boolean;
  handleClose: () => void;
  data: any;
}

const UsersViewModal: React.FC<UsersViewModalProps> = ({ open, handleClose, data }) => {
  return open ? (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <UsersViewModalContent handleClose={handleClose} data={data} />
      </div>
    </div>
  ) : null;
};

export default UsersViewModal;
