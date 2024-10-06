// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggle_true_and_false_on_login } from '../features/counter/counterSlice';
// import './CounterComponent.css';

// const CounterComponent = () => {
//   const dispatch = useDispatch();
//   const toggleValue = useSelector((state) => state.counter.toggleValue);
//   const isLoggedIn = useSelector((state) => state.counter.isLoggedIn);

//   const handleToggle = () => {
//     dispatch(toggle_true_and_false_on_login(!toggleValue));
//   };

//   return (
//     <div className="counter-component">
//       <h1>Counter Component</h1>
//       <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
//       <p>Toggle Value: {toggleValue ? "True" : "False"}</p>
//       <button onClick={handleToggle}>
//         Toggle
//       </button>
//     </div>
//   );
// };

// export default CounterComponent;


















// // import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { logout } from '../features/auth/authSlice'; // Adjust path if needed
// // import { useNavigate } from 'react-router-dom';


// // const CounterComponent = () => {
// //   // Fetch the logged-in status from the auth slice
// //   const isLoggedIn = useSelector((state) => state.auth.token !== null);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     dispatch(logout()); // Call the logout action from authSlice
// //     navigate('/login'); // Redirect to login page
// //   };

// //   return (
// //     <div>
// //       {isLoggedIn ? (
// //         <>
// //           <h1>Welcome Back!</h1>
// //           <button onClick={handleLogout}>Logout</button>
// //         </>
// //       ) : (
// //         <h1>Please log in</h1>
// //       )}
// //     </div>
// //   );
// // };

// // export default CounterComponent;
