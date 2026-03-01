import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDashboardData,
  fetchUsers,
  deleteUser,
} from '../../../../features/admin/adminSlice';

import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { eventCount, userCount, feedbackCount, users, loading, error } =
    useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchDashboardData());
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="title">Admin Dashboard</h1>

      {error && <p className="error">{error}</p>}

      {/* ======== STAT CARDS ======== */}
      <div className="stats-container">
        <div className="stat-box blue">
          <h3>Events</h3>
          <p>{eventCount}</p>
          <Link to="/admin/events" className="btn">Manage Events</Link>
        </div>

        <div className="stat-box green">
          <h3>Users</h3>
          <p>{userCount}</p>
          <Link to="/admin/users" className="btn">Manage Users</Link>
        </div>

        <div className="stat-box pink">
          <h3>Feedbacks</h3>
          <p>{feedbackCount}</p>
          <Link to="/admin/feedback" className="btn">View Feedback</Link>
        </div>
      </div>

      {/* ========== USER LIST ========== */}
      <h2 className="sub-title">All Users</h2>

      <div className="user-list">
        {loading && <p>Loading users...</p>}

        {users.length === 0 ? (
          <p className="no-users">No users found.</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="user-card">
              <div>
                <h4>{user.name}</h4>
                <p className="email">{user.email}</p>
                <p className="role">Role: {user.role}</p>
              </div>

              <button className="delete-btn" onClick={() => handleDelete(user._id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;




// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDashboardData, fetchUsers, deleteUser } from '../../../../features/admin/adminSlice'; // Importing actions
// import './AdminDashboard.css';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   const dispatch = useDispatch();
//   const { eventCount, userCount, feedbackCount, users, loading, error } = useSelector((state) => state.admin);

//   useEffect(() => {
//     dispatch(fetchDashboardData()); // Fetch dashboard data
//     dispatch(fetchUsers());         // Fetch users data
//   }, [dispatch]);

//   const handleDeleteUser = (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       dispatch(deleteUser(userId)); // Dispatch delete user action
//     }
//   };

//   return (
//     <div className="admin-dashboard-container">
//       <h2>Admin Dashboard</h2>

//       {loading && <p>Loading dashboard data...</p>}
//       {error && <p className="error-message">{error}</p>}

//       <div className="dashboard-stats">
//         <div className="stat-card">
//           <h3>Total Events</h3>
//           <p>{eventCount}</p>
//           <Link to="/admin/events" className="btn">Manage Events</Link>
//         </div>
//         <div className="stat-card">
//           <h3>Total Users</h3>
//           <p>{userCount}</p>
//           <Link to="/admin/users" className="btn">Manage Users</Link>
//         </div>
//         <div className="stat-card">
//           <h3>Total Feedback</h3>
//           <p>{feedbackCount}</p>
//           <Link to="/admin/feedback" className="btn">View Feedback</Link>
//         </div>
//       </div>

//       <h3>Users List</h3>
//       {loading && <p>Loading users...</p>}
//       {error && <p className="error-message">{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} 
//             <button onClick={() => handleDeleteUser(user.id)} className="btn delete-btn">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;
