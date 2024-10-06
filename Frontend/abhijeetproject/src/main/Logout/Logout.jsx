import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle_true_and_false_on_login } from '../../features/counter/counterSlice.js'; // Correct action import
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // SweetAlert for notifications
import './Logout.css'; // Optional: Add your custom styles if needed

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Retrieve role from localStorage (or you can use Redux state if roles are stored there)
    const role = localStorage.getItem('role');

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'No, cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('authToken'); // Remove the token from local storage
                localStorage.removeItem('role'); // Clear the role from local storage
                dispatch(toggle_true_and_false_on_login(false)); // Dispatch action to update login state
                
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out',
                    text: 'You have been logged out successfully.',
                });

                // Redirect based on role after logout
                if (role === 'admin') {
                    navigate('/admin/login'); // Redirect admin to admin login
                } else if (role === 'event-owner') {
                    navigate('/event-owner/login'); // Redirect event owner to event owner login
                } else {
                    navigate('/login'); // Default redirect to user login
                }
            }
        });
    };

    return (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;











// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { toggle_true_and_false_on_login } from '../../features/counter/counterSlice.js'; // Correct action import
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'; // SweetAlert for notifications
// import './Logout.css'; // Optional: Add your custom styles if needed

// const Logout = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: 'Do you really want to logout?',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, logout',
//             cancelButtonText: 'No, cancel',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 localStorage.removeItem('authToken'); // Remove the token from local storage
//                 dispatch(toggle_true_and_false_on_login(false)); // Dispatch action to update login state
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Logged Out',
//                     text: 'You have been logged out successfully.',
//                 });
//                 navigate('/login'); // Redirect to login page
//             }
//         });
//     };

//     return (
//         <button className="logout-button" onClick={handleLogout}>
//             Logout
//         </button>
//     );
// };

// export default Logout;
