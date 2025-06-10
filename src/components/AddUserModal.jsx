// AddUserModal.jsx
// This component renders a modal for confirming the addition of a new user.
// It displays the user's details and provides options to confirm or cancel the addition.
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const AddUserModal = ({ open, onClose, formData, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          width: { xs: '90vw', sm: 400 },
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          maxWidth: '95vw',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
          Do you want to add this user?
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          <strong>First Name:</strong> {formData.firstName}<br />
          <strong>Middle Name:</strong> {formData.middleName || 'N/A'}<br />
          <strong>Last Name:</strong> {formData.lastname}<br />
          <strong>Suffix:</strong> {formData.suffix || 'N/A'}<br />
          <strong>Age:</strong> {formData.age}<br />
          <strong>Birthdate:</strong> {formData.birthdate}<br />
          <strong>Address:</strong> {formData.address}
        </Typography>
        {/* submit and delete button */}
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={onConfirm}>
            OK
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
