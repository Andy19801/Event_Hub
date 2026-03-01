import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import Header from './components/Header/Header';
import Home from './components/Home/Home'; 
import About from './components/About/About';
import Ourservice from './components/Ourservice/Ourservice';
import Gallary from './components/Gallary/Gallary';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Order from './components/Order/Order';
import Login from './main/Login/Login';
import Signin from './main/Signin/Signin'; 
import MyBookings from './components/MyBookings/MyBookings';

import AdminDashboard from './components/AA/Admin/Dashboard/AdminDashboard';
import ManageUsers from "./components/AA/Admin/ManageUsers";
import ManageEvents from "./components/AA/Admin/ManageEvents";
import BookingList from "./components/AA/Admin/BookingList";
import FeedbackList from "./components/AA/Admin/FeedackList";
import ViewUserDetails from "./components/AA/Admin/ViewUserDetails";

import EventOwnerDashboard from './components/AA/EventOwner/Dashboard/EventOwnerDashboard';
import UserDashboard from './components/AA/User/Dashboard/UserDashboard';

import UserProfile from './components/AA/Profile/UserProfile';
import ViewEvents from './components/AA/User/Dashboard/ViewEvents';
import BookEvent from './components/AA/User/Dashboard/BookEvent';

import { checkAuthStatus } from './utils/auth';
// import ProtectedRoute from './main/ProtectedRoute';
import ForgotPassword from './main/ForgotPassword';
import ResetPassword from './main/ResetPassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { status, role } = await checkAuthStatus();
        setIsLoggedIn(status);
        setUserRole(role);
      } catch (error) {
        console.error("Failed to check authentication:", error);
      }
    };
    checkAuth();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>

          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourservice" element={<Ourservice />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* USER DASHBOARD & PROFILE */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/events" element={<ViewEvents />} />

          {/* BOOK EVENT */}
          <Route path="/book/:eventId" element={<BookEvent />} />

          {/* PROTECTED USER ROUTES */}
          <Route
            path="/order"
            element={
                <Order />
            }
          />

          <Route
            path="/my-bookings"
            element={
                <MyBookings />
            }
          />

          {/* EVENT OWNER DASHBOARD */}
          <Route path="/eventownerdashboard/dashboard" element={<EventOwnerDashboard />} />

          {/* ADMIN ROUTES */}
          <Route
            path="/admin/dashboard"
            element={
                <AdminDashboard />
            }
          />

          <Route
            path="/admin/users"
            element={
                <ManageUsers />
            }
          />

          <Route
            path="/admin/events"
            element={
                <ManageEvents />
            }
          />

          <Route
            path="/admin/bookings"
            element={
                <BookingList />
           
            }
          />

          <Route
            path="/admin/feedback"
            element={
              
                <FeedbackList />
             
            }
          />

          <Route
            path="/admin/user/:id"
            element={
             
                <ViewUserDetails />
             
            }
          />

          {/* UNKNOWN ROUTE */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home'; 
// import About from './components/About/About';
// import Ourservice from './components/Ourservice/Ourservice';
// import Gallary from './components/Gallary/Gallary';
// import Review from './components/Review/Review';
// import Contact from './components/Contact/Contact';
// import Order from './components/Order/Order';
// import Login from './main/Login/Login';
// import Signin from './main/Signin/Signin'; 
// import MyBookings from './components/MyBookings/MyBookings'; // Ensure this component is imported
// import AdminDashboard from './components/AA/Admin/Dashboard/AdminDashboard';
// import EventOwnerDashboard from './components/AA/EventOwner/Dashboard/EventOwnerDashboard';
// import UserDashboard from './components/AA/User/Dashboard/UserDashboard';
// import UserProfile from './components/AA/Profile/UserProfile';
// import ViewEvents from './/components/AA/User/Dashboard/ViewEvents';
// import BookEvent from './components/AA/User/Dashboard/BookEvent';
// import EventCard from './components/AA/User/Dashboard/EventCard';

// import { checkAuthStatus } from './utils/auth'; // Ensure this function returns user role
// import ProtectedRoute from './main/ProtectedRoute';
// import ForgotPassword from './main/ForgotPassword';
// import ResetPassword from './main/ResetPassword';


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState(''); // Add state for user role

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const { status, role } = await checkAuthStatus(); 
//         setIsLoggedIn(status);
//         setUserRole(role); 
//       } catch (error) {
//         console.error("Failed to check authentication:", error);
//       }
//     };
  
//     checkAuth();
//   }, []);
//   return (
//     <Provider store={store}>
//     <div className="app">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/ourservice" element={<Ourservice />} />
//           <Route path="/gallary" element={<Gallary />} />
//           <Route path="/review" element={<Review />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* Role-based Dashboards */}
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
          

//         <Route path="/user/dashboard" element={<UserDashboard />} />

        
//         <Route path="/eventownerdashboard/dashboard" element={<EventOwnerDashboard />} />
  
// {/* USER ROUTES */}
// <Route path="/user/profile" element={<UserProfile />} />
// <Route path="/user/events" element={<ViewEvents />} />
// <Route path="/forgot-password" element={<ForgotPassword />} />
// <Route path="/reset-password" element={<ResetPassword />} />
// <Route path="/book/:eventId" element={<BookEvent />} />
// <Route>
//       <Routes>
//         <Route path="/" element={<EventCard />} />
//         <Route path="/book/:eventId" element={<BookEvent />} />
//       </Routes>
//     </Route>

//   {/* Order Route Protected for Event Owners */}
//   <Route 
//     path="/order" 
//     element={
//       <ProtectedRoute isLoggedIn={isLoggedIn} userRole={userRole} requiredRole="user">
//         <Order />
//       </ProtectedRoute>
//     } 
//   /> */
//   {/* Bookings Route Protected for Any Logged-in User */}
//   <Route 
//     path="/my-bookings" 
//     element={
//       <ProtectedRoute isLoggedIn={isLoggedIn}>
//         <MyBookings />
//       </ProtectedRoute>
//     } 
//   />
//           {/* Authentication Routes */}
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/signin" element={<Signin />} />

//           {/* Redirect to home for undefined routes */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//     </Provider>
//   );
// }

// export default App;