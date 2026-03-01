import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../../../features/admin/adminSlice";
import "./ManageUser.css";

const ManageUsers = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Manage Users</h2>

      {loading && <p>Loading...</p>}

      <div className="list-container">
        {users.map((u) => (
          <div className="list-card" key={u._id}>
            <div>
              <h4>{u.name}</h4>
              <p className="email">Email: {u.email}</p>
              <p className="role">Role: {u.role}</p>
            </div>

            <div>
              <button
                className="view-btn"
                onClick={() => (window.location.href = `/admin/user/${u._id}`)}
              >
                View
              </button>

              <button
                className="delete-btn"
                onClick={() => dispatch(deleteUser(u._id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {users.length === 0 && <p>No users found.</p>}
      </div>
    </div>
  );
};

export default ManageUsers;
