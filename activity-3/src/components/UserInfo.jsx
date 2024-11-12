import React, { useContext } from 'react';
import { AppContext } from '../App.jsx'; 

const UserInfo = () => {
  const { username, theme } = useContext(AppContext); 

  return (
    <div className={`user-info-container ${theme}`}>
      <h2>User Information</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Current Theme:</strong> {theme}</p>
    </div>
  );
};

export default UserInfo;
