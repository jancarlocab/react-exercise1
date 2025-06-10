// DeleteUserModal.jsx
// This component renders a modal for confirming user deletion.

import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const DeleteUserModal = ({ open, onClose, onConfirm, userData }) => {
  return (
    <Dialog open={open} onClose={onClose}
        aria-labelledby="delete-user-dialog-title"
        aria-describedby="delete-user-dialog-description"
        sx={{
            '& .MuiDialog-paper': {
            backgroundColor: 'black',
            color: 'white',
            width: { xs: '90vw', sm: 400 },
            maxWidth: '95vw',
            maxHeight: '90vh',
            overflowY: 'auto',
            },
        }}
    >
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete user {userData?.firstName} {userData?.lastname}?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserModal;