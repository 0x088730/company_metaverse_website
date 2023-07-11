import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../redux/actions/modalActions';

const Modal = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    console.log(isOpen)
  },[])
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>Close</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);