import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchEvents } from '../../../features/user/userActions'; // Adjust path as necessary

const EventSearch = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('area'); // Default search by area

  const handleSearch = (e) => {
    e.preventDefault();
    // Dispatch search action with the search term and field
    dispatch(searchEvents({ searchTerm, searchField }));
  };

  return (
    <div className="event-search-container">
      <h3>Search Events</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          required
        />
        <select onChange={(e) => setSearchField(e.target.value)} value={searchField}>
          <option value="area">Area</option>
          <option value="city">City</option>
          <option value="other">Other Field</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default EventSearch;
