// EditUserModal.jsx

// This component is used to edit user information in a modal dialog.
// It allows users to modify their details and submit the changes.
// It receives props for managing the modal state, form data, and change handlers.

import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const EditUserModal = ({ 
  open, 
  onClose, 
  editFormData, 
  onEditChange, 
  onEditSubmit 
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          height: 'auto',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          width: { xs: '90vw', sm: 400 },
          maxWidth: '95vw',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <Typography id="edit-modal-title" variant="h6" component="h2" gutterBottom>
          Edit User
        </Typography>
        <form
          onSubmit={onEditSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            maxWidth: 400,
          }}
        >

          {/* Firstname input */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="firstName">* Enter your first name:</label>
            <input
              required
              type="text"
              name="firstName"
              value={editFormData.firstName}
              placeholder="First Name"
              onChange={onEditChange}
              pattern='^[A-Za-z.\- ]+$'
              title="Only letters and periods are allowed."
            />
          </div>
          {/* Middle name input - optional */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="middleName">Enter your middle name (optional):</label>
            <input
              type="text"
              name="middleName"
              value={editFormData.middleName}
              placeholder="Middle Name"
              onChange={onEditChange}
              pattern='^[A-Za-z.\- ]+$'
              title="Only letters and periods are allowed."
            />
          </div>
          {/* last name input */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="lastname">* Enter your last name:</label>
            <input
              required
              type="text"
              name="lastname"
              value={editFormData.lastname}
              placeholder="Last Name"
              onChange={onEditChange}
              pattern='^[A-Za-z.\- ]+$'
              title="Only letters and periods are allowed."
            />
          </div>
          {/* suffix input */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="suffix">Select your suffix (optional):</label>
            <select name="suffix" value={editFormData.suffix} onChange={onEditChange}>
              <option value="">Select Suffix</option>
              <option value="Jr.">Jr.</option>
              <option value="Sr.">Sr.</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </div>
          {/* age input */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="age">* Enter your Age:</label>
            <input
              required
              type="number"
              name="age"
              value={editFormData.age}
              placeholder="Age"
              onChange={onEditChange}
              min="0"
            />
          </div>
          {/* birthdate input */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="birthdate">* Enter your birthdate:</label>
            <input
              required
              type="date"
              name="birthdate"
              value={editFormData.birthdate}
              onChange={onEditChange}
            />
          </div>
          {/* address input */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="address">* Enter your address:</label>
            <input
              required
              type="text"
              name="address"
              value={editFormData.address}
              placeholder="Address"
              onChange={onEditChange}
            />
          </div>

          {/* SAVE BUTTON */}
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" type="submit">
              Save
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
        </form>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
