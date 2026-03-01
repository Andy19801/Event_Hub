import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import logo2 from "../../asserts/logo1.png";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth || {});
  const token = authState.token || localStorage.getItem("token");
  const isLoggedIn = Boolean(token);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (

    <header className="header">

  <div className="logo-container">
    <Link to="/">
      <img src={logo2} alt="Event Hub Logo" />
    </Link>
  </div>

  <nav className="nav">
    <ul>
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/about">About</Link></li>
      <li className="nav-item"><Link to="/ourservice">Services</Link></li>
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>

  <div className="auth-buttons">

    <Link to="/order">
      <button className="order-btn">Book Now</button>
    </Link>

    <Link to="/login">
      <button className="login-btn">Login</button>
    </Link>

    <Link to="/signin">
      <button className="signin-btn">Sign Up</button>
    </Link>

  </div>

</header>
    // <header className="eh-header">
    //   {/* Left Logo */}
    //   <div className="eh-logo-sec">
    //     <Link to="/">
    //       <img src={logo2} alt="EventHub Logo" className="eh-logo" />
    //     </Link>
    //   </div>

    //   {/* Center Menu */}
    //   <nav className="eh-nav">
    //     <ul>
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/ourservice">Services</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    //   </nav>

    //   {/* Right Side Buttons */}
    //   <div className="eh-right">
    //     <Link to="/order">
    //       <button className="eh-book-btn">Book Now</button>
    //     </Link>

    //     {isLoggedIn ? (
    //       <button className="eh-logout-btn" onClick={handleLogout}>
    //         Logout
    //       </button>
    //     ) : (
    //       <>
    //         <Link to="/login"><button className="eh-login-btn">Login</button></Link>
    //         <Link to="/signin"><button className="eh-signin-btn">Sign Up</button></Link>
    //       </>
    //     )}
    //   </div>
    // </header>
  );
};

export default Header;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import './Header.css';
// import logo2 from '../../asserts/logo1.png';
// import { logout } from '../../features/auth/authSlice';

// const Header = () => {
//   const dispatch = useDispatch();

//   // FIX 1 — prevent "undefined" crash
//   const authState = useSelector((state) => state.auth || {});

//   // FIX 2 — safely extract token
//   const token = authState.token || localStorage.getItem("token");

//   // FIX 3 — correct boolean check
//   const isLoggedIn = Boolean(token);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <Link to="/">
//           <img src={logo2} alt="Event Hub Logo" className="logo" />
//         </Link>
//       </div>

//       <nav className="nav">
//         <ul>
//           <li className="nav-item"><Link to="/">Home</Link></li>
//           <li className="nav-item"><Link to="/about">About</Link></li>
//           <li className="nav-item"><Link to="/ourservice">Services</Link></li>
//           <li className="nav-item"><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>

//       <Link to="/order" className="order-btn">
//         <button className="order-btn">Book Now</button>
//       </Link>

//       <div className="auth-buttons">
//         {isLoggedIn ? (
//           <button onClick={handleLogout} className="logout-btn">Logout</button>
//         ) : (
//           <>
//             <Link to="/login">
//               <button className="login-btn">Login</button>
//             </Link>
//             <Link to="/signin">
//               <button className="signin-btn">Sign In</button>
//             </Link>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
