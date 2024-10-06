import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, resetError } from '../../../../features/admin/adminActions';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    
    // Accessing state from Redux store
    const { users, loading, error } = useSelector((state) => state.admin);

    // Fetch users on component mount
    useEffect(() => {
        dispatch(fetchUsers());

        // Cleanup any existing error on unmount
        return () => {
            dispatch(resetError());
        };
    }, [dispatch]);

    // Handle user deletion
    const handleDeleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            <section>
                <h2>Manage Users</h2>
                {users.length === 0 ? (
                    <p>No users found</p>
                ) : (
                    <ul>
                        {users.map((user) => (
                            <li key={user._id}>
                                <p>{user.name} ({user.email})</p>
                                <button onClick={() => handleDeleteUser(user._id)}>Delete User</button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default AdminDashboard;






// // src/features/admin/AdminDashboard.jsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers, deleteUser, resetError } from '../../../../features/admin/adminActions';

// const AdminDashboard = () => {
//     const dispatch = useDispatch();
//     const { users, loading, error } = useSelector((state) => state.admin);

//     useEffect(() => {   
//         dispatch(fetchUsers());
//     }, [dispatch]);

//     const handleDelete = (userId) => {
//         dispatch(deleteUser(userId));
//     };

//     const handleResetError = () => {
//         dispatch(resetError());
//     };

//     return (
//         <div>
//             <h2>Admin Dashboard</h2>
//             {loading && <p>Loading...</p>}
//             {error && (
//                 <div>
//                     <p>Error: {error}</p>
//                     <button onClick={handleResetError}>Clear Error</button>
//                 </div>
//             )}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 <button onClick={() => handleDelete(user._id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;

