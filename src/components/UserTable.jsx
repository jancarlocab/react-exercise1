// UserTable.jsx
// This component renders a table displaying user data with options to edit or delete each user.
// It receives user data and functions for handling edit and delete actions as props.

import React from 'react';
import { Button, Stack } from '@mui/material';

const UserTable = ({ users, onEditClick, onDeleteClick }) => {
  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <table className="user-table" style={{ width: '100%', minWidth: 700 }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Suffix</th>
            <th>Age</th>
            <th>Birthdate</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.middleName || 'N/A'}</td>
              <td>{user.lastname}</td>
              <td>{user.suffix || 'N/A'}</td>
              <td>{user.age}</td>
              <td>{user.birthdate}</td>
              <td>{user.address}</td>
              <td>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onEditClick(user, index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => onDeleteClick(user, index)}
                  >
                    Delete
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;