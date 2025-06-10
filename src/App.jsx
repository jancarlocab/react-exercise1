import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import AddUserModal from './components/AddUserModal';
import EditUserModal from './components/EditUserModal';
import DeleteUserModal from './components/DeleteUserModal';

const LOCAL_STORAGE_KEY = 'users';

function UserManagement() {
  // state to hold user data
  const [users, setUsers] = useState([]);
  // state to handle form visibility
  const [isCollapsed, setIsCollapsed] = useState(true);
  // state to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastname: '',
    middleName: '',
    age: '',
    birthdate: '',
    address: '',
    suffix: '',
  });
  // state for add modal
  const [openModal, setOpenModal] = useState(false);
  // state for edit modal
  const [editModal, setEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  
  // state for delete modal
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  // state to avoid initial render overwrite
  const [hasLoaded, setHasLoaded] = useState(false);


  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastname: '',
    middleName: '',
    age: '',
    birthdate: '',
    address: '',
    suffix: '',
  });

  // LOCAL STORAGE HANDLERS
  // Load users from localStorage on mount
  useEffect(() => {
    const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    setHasLoaded(true);
  }, []);


  // Save users to localStorage whenever users changes
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }
  }, [users, hasLoaded]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.age === '') {
      alert('Age must be a number');
      return;
    }
    setOpenModal(true);
  };

  // Closes modal and also adds user data to the users array
  const handleModalClose = () => {
    setOpenModal(false);
    // add the user data to the users array
    setUsers([...users, formData]);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastname: '',
      middleName: '',
      age: '',
      birthdate: '',
      address: '',
      suffix: '',
    });
    setIsCollapsed((prev) => !prev);
  };

  // Edit user handlers
  const handleEditClick = (user, idx) => {
    setEditIndex(idx);
    setEditFormData(user);
    setEditModal(true);
  };

  // Handles the change in edit form and also edits the user data
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // update user at editIndex
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editFormData;
    setUsers(updatedUsers);
    setEditModal(false);
    setEditIndex(null);
  };

  // Delete user handlers
  const handleDeleteClick = (user, idx) => {
    setDeleteUser(user);
    setDeleteIndex(idx);
    setDeleteModal(true);
  };

  // Handles the confirmation of delete action and removes the user from the users array
  const handleDeleteConfirm = () => {
    const updatedUsers = users.filter((_, idx) => idx !== deleteIndex);
    setUsers(updatedUsers);
    setDeleteModal(false);
    setDeleteIndex(null);
    setDeleteUser(null);
  };

  const handleEditModalClose = () => {
    setEditModal(false);
    setEditIndex(null);
  };

  const handleToggleForm = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className="user-form-container"
      style={{
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        padding: 16,
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <center><h1> User Management </h1></center>
      
      {/* Displaying the users array */}
      <UserTable users={users} 
        onEditClick={handleEditClick} 
        onDeleteClick={handleDeleteClick}
      />
      
      <UserForm
        formData={formData}
        onFormChange={handleChange}
        onFormSubmit={handleSubmit}
        isCollapsed={isCollapsed}
        onToggleForm={handleToggleForm}
      />

      {/* ADD USER MODAL */}
      <AddUserModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        formData={formData}
        onConfirm={handleModalClose}
      />

      {/* EDIT USER MODAL */}
      <EditUserModal
        open={editModal}
        onClose={handleEditModalClose}
        editFormData={editFormData}
        onEditChange={handleEditChange}
        onEditSubmit={handleEditSubmit}
      />

      {/* DELETE USER MODAL */}
      <DeleteUserModal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
        userData={deleteUser}
      />

      <button
        className='delete-all-button'
        style={{
          marginTop: 20,
          padding: '10px 20px',
          backgroundColor: users.length === 0 ? 'grey' : 'red',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
        }}
        onClick={() => setUsers([])}
        disabled={users.length === 0}
      >
        Delete All Users
      </button>
    </div>
  );
}

export default UserManagement;