// UserForm.jsx
// This component renders a user form that allows users to input their details.
// It includes fields for first name, middle name, last name, suffix, age, birthdate, and address.
// The form can be toggled to show or hide, and it handles form submission and changes.

import React from 'react';

const UserForm = ({ formData, onFormChange, onFormSubmit, isCollapsed, onToggleForm }) => {
  return (
    <>
      <div className="toggle-button-container" style={{ marginTop: 16 }}>
        <button
          type="button"
          className="toggle-button"
          aria-label="Toggle Form Visibility"
          onClick={onToggleForm}
        >
          {isCollapsed ? 'Add User' : 'Hide User Form'}
        </button>
      </div>
      
      {/* conditional rendering */}
      {!isCollapsed && (
        <form
          className='user-form'
          onSubmit={onFormSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            maxWidth: 500,
            margin: '24px auto'
          }}
        >
          <h2>User Form</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="firstName">* Enter your first name:</label>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              placeholder="First Name"
              onChange={onFormChange}
              pattern="^[A-Za-z. \-]+$"
              title="Only letters and periods are allowed."
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="middleName">Enter your middle name (optional):</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              placeholder="Middle Name"
              onChange={onFormChange}
              pattern="^[A-Za-z. \-]+$"
              title="Only letters and periods are allowed."
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="lastname">* Enter your last name:</label>
            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Last Name"
              onChange={onFormChange}
              pattern="^[A-Za-z. \-]+$"
              title="Only letters and periods are allowed."
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="suffix">Select your suffix (optional):</label>
            <select name="suffix" value={formData.suffix} onChange={onFormChange}>
              <option value="">Select Suffix</option>
              <option value="Jr.">Jr.</option>
              <option value="Sr.">Sr.</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="age">* Enter your Age:</label>
            <input
              required
              type="number"
              name="age"
              value={formData.age}
              placeholder="Age"
              onChange={onFormChange}
              min="0"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="birthdate">* Enter your birthdate:</label>
            <input
              required
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={onFormChange}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="address">* Enter your address:</label>
            <input
              required
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={onFormChange}
              pattern="^[A-Za-z0-9., \-]+$"
              title="Only letters, numbers, periods, commas, and hyphens are allowed."
            />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default UserForm;