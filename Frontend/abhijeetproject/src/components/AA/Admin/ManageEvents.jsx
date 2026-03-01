import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../../../features/admin/adminSlice";
import "./ManageEvents.css";

const ManageEvents = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Manage Events</h2>

      <div className="list-container">
        {events?.map((ev) => (
          <div className="list-card" key={ev._id}>
            <div>
              <h4>{ev.name}</h4>
              <p>Date: {new Date(ev.date).toLocaleDateString()}</p>
              <p>Location: {ev.location}</p>
            </div>
          </div>
        ))}

        {events?.length === 0 && <p>No events available.</p>}
      </div>
    </div>
  );
};

export default ManageEvents;

