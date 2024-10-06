// Profile.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, changeProfilePic } from '../features/auth/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [uploading, setUploading] = useState(false);
  const changePasswordStatus = useSelector((state) => state.auth.changePasswordStatus);
  const changeProfilePicStatus = useSelector((state) => state.auth.changeProfilePicStatus);
  const error = useSelector((state) => state.auth.changePasswordError || state.auth.changeProfilePicError);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    dispatch(changePassword({ currentPassword, newPassword }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePic', file);
      setUploading(true);
      dispatch(changeProfilePic(formData)).finally(() => {
        setUploading(false);
      });
    }
  };

  return (
    <div>
      <h1>Profile Management</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div>
          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={changePasswordStatus === 'loading'}>
          {changePasswordStatus === 'loading' ? 'Changing...' : 'Change Password'}
        </button>
      </form>

      <h2>Change Profile Picture</h2>
      <input type="file" accept="image/*" onChange={handleProfilePicChange} />
      <button disabled={uploading}>{uploading ? 'Uploading...' : 'Upload'}</button>

      {user && (
        <div>
          <h3>Current Profile Picture</h3>
          {user.profilePic && <img src={user.profilePic} alt="Profile" style={{ width: '100px' }} />}
        </div>
      )}
    </div>
  );
};

export default Profile;
