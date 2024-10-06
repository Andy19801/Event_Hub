// src/components/admin/UserManagement.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../../../features/admin/adminSlice';
import { selectUsers, selectLoading, selectError } from '../../../features/admin/adminSelectors';

const UserManagement = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);  // Select users from state
    const loading = useSelector(selectLoading);  // Select loading state
    const error = useSelector(selectError);  // Select error state

    useEffect(() => {
        dispatch(fetchUsers());  // Fetch usersS when the component mounts
    }, [dispatch]);

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));  // Dispatch delete user action
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="user-management">
            <h1>User Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
