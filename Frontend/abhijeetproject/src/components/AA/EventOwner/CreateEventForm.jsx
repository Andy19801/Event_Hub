import React, { useEffect, useState } from "react";

const CreateEventForm = ({ editEvent, setEditEvent, onCreate, onUpdate }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
    location: ""
  });

  useEffect(() => {
    if (editEvent) {
      setForm({
        name: editEvent.name,
        description: editEvent.description || "",
        date: editEvent.date.split("T")[0],
        location: editEvent.location
      });
    }
  }, [editEvent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editEvent) {
      onUpdate({ id: editEvent._id, ...form });
      setEditEvent(null);
    } else {
      onCreate(form);
    }

    setForm({ name: "", description: "", date: "", location: "" });
  };

  return (
    <div className="form-card">
      <h3>{editEvent ? "Update Event" : "Create New Event"}</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Event Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Event Location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editEvent ? "Update Event" : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;


// import React, { useEffect, useState } from "react";

// const CreateEventForm = ({ editEvent, setEditEvent, onCreate, onUpdate }) => {
//   const [form, setForm] = useState({ name: "", date: "", location: "" });

//   useEffect(() => {
//     if (editEvent) {
//       setForm({
//         name: editEvent.name,
//         date: editEvent.date.split("T")[0],
//         location: editEvent.location
//       });
//     }
//   }, [editEvent]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editEvent) {
//       onUpdate({ id: editEvent._id, ...form });
//       setEditEvent(null);
//     } else {
//       onCreate(form);
//     }

//     setForm({ name: "", date: "", location: "" });
//   };

//   return (
//     <div className="form-card">
//       <h3>{editEvent ? "Edit Event" : "Create Event"}</h3>

//       <form onSubmit={handleSubmit}>
//         <input name="name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Event Name" />
//         <input type="date" name="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} />
//         <input name="location" value={form.location} onChange={(e)=>setForm({...form,location:e.target.value})} placeholder="Event Location" />

//         <button type="submit">{editEvent ? "Update" : "Create"}</button>
//       </form>
//     </div>
//   );
// };

// export default CreateEventForm;