import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import MyBookings from './components/MyBookings/MyBookings'; // Ensure this component is imported
import AdminDashboard from './components/AA/Admin/Dashboard/AdminDashboard';
import UserDashboard from './components/AA/User/Dashboard/UserDashboard';
import { checkAuthStatus } from './utils/auth'; // Ensure this function returns user role
import ProtectedRoute from './main/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // Add state for user role

  useEffect(() => {
    const checkAuth = async () => {
      const { status, role } = await checkAuthStatus(); // Assume this returns both status and role
      setIsLoggedIn(status);
      setUserRole(role); // Set the user role based on the authentication status
    };

    checkAuth();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourservice" element={<Ourservice />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          {/* Role-based Dashboards */}
  <Route 
    path="/admin/dashboard" 
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn} userRole={userRole} requiredRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    } 
  />
  <Route 
    path="/user/dashboard" 
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn} userRole={userRole} requiredRole="user">
        <UserDashboard />
      </ProtectedRoute>
    } 
  />
 
 

  {/* Order Route Protected for Event Owners */}
  <Route 
    path="/order" 
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn} userRole={userRole} requiredRole="user">
        <Order />
      </ProtectedRoute>
    } 
  />
  
  {/* Bookings Route Protected for Any Logged-in User */}
  <Route 
    path="/my-bookings" 
    element={
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <MyBookings />
      </ProtectedRoute>
    } 
  />

     

        

          {/* Authentication Routes */}
          
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />

          {/* Redirect to home for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;








// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
// // import MyProfile from './components/MyProfile/MyProfile'; // Import MyProfile component
// import AdminDashboard from './components/AA/Admin/Dashboard/AdminDashboard'; // Import AdminDashboard component
//  import UserDashboard from './components/AA/User/Dashboard/UserDashboard'; // Import UserDashboard component
// import EventOwnerDashboard from './components/AA/EventOwner/Dashboard/EventOwnerDashboard'; // Import EventOwnerDashboard component
// import { checkAuthStatus } from './utils/auth';
// import ProtectedRoute from './main/ProtectedRoute';
// // import CounterComponent from './components/CounterComponent';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       const status = await checkAuthStatus();
//       setIsLoggedIn(status);
//     };

//     checkAuth();
//   }, []);

//   return (
//     <div className="app">
//       <BrowserRouter>
//         {/* Header component will be visible on all pages */}
//         <Header />

//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/ourservice" element={<Ourservice />} />
//           <Route path="/gallary" element={<Gallary />} />
//           <Route path="/review" element={<Review />} />
//           <Route path="/contact" element={<Contact />} />


         
//           {/* Protected Routes */}
//           <Route 
//             path="/order" 
//             element={isLoggedIn && userRole === 'EventOwner' ? <Order /> : <Navigate to="/login" />} 
//           />
//           <Route 
//             path="/my-bookings" 
//             element={isLoggedIn ? <MyBookings /> : <Navigate to="/login" />} 
//           />
//           {/* <Route 
//             path="/my-profile" 
//             element={isLoggedIn ? <MyProfile /> : <Navigate to="/login" />} 
//           /> */}

//           {/* Role-based Dashboards */}
//           <Route 
//             path="/admin-dashboard" 
//             element={isLoggedIn && userRole === 'Admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
//           />
//           <Route 
//             path="/user-dashboard" 
//             element={isLoggedIn && userRole === 'User' ? <UserDashboard /> : <Navigate to="/login" />} 
//           />
//           <Route 
//             path="/eventowner-dashboard" 
//             element={isLoggedIn && userRole === 'EventOwner' ? <EventOwnerDashboard /> : <Navigate to="/login" />} 
//           />

         

//           {/* Authentication Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signin" element={<Signin />} />


//           {/* Redirect to home for undefined routes */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
 // {/* Protected Route - Only accessible if user is logged in */}
          // <Route 
          //   path="/order" 
          //   element={isLoggedIn ? <Order /> : <Navigate to="/login" />} 
          // />
          
          // {/* Using ProtectedRoute for CounterComponent */}
          // <Route 
          //   path="/counter" 
          //   element={<ProtectedRoute element={CounterComponent} />} 
          // />