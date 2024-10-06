import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from 'react-router-dom';
import './Signin.css'; // Import the CSS file for styling
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons for show/hide functionality

const Signin = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user', // Default role set to 'user'
    });

    const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
    const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any of the input fields are empty
        if (!formData.name || !formData.email || !formData.password) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill in all fields.',
            });
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Password must contain at least one alphabetic character, one digit, one special character, and be at least 8 characters long.',
            });
            return;
        }

        // Email validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please enter a valid email address.',
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
            console.log('API response:', response.data);
            
            if (response.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have registered successfully.',
                });
                navigate('/login'); // Redirect to login page after successful registration
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Registration Failed',
                    text: 'Something went wrong...',
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'An error occurred while trying to register. Please try again later.',
            });
        }
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Register</h1>
                <form className="loginsignup-fields" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required // Make this field required
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required // Make this field required
                    />
                    <div className="password-container">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required // Make this field required
                        />
                        <button
                            type="button"
                            className="eye-button"
                            onClick={togglePasswordVisibility}
                            aria-label={passwordVisible ? 'Hide Password' : 'Show Password'}
                        >
                            {passwordVisible ? <HiEyeOff /> : <HiEye />}
                        </button>
                    </div>

                    {/* Role Selection Dropdown */}
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="loginsignup-role"
                        required // Make this field required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                    <p className="loginsignup-login">
                        Already have an account? <a href="/login">Login here</a>
                    </p>
                    <div className="loginsignup-agree">
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            required // Ensure agreement checkbox is required
                        />
                        <label htmlFor="agree">
                            By continuing, I agree to the terms of use & privacy policy.
                        </label>
                    </div>
                    <button type="submit" disabled={!isChecked}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signin;


















// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert
// import { useNavigate } from 'react-router-dom';
// import './Signin.css'; // Import the CSS file for styling
// import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import eye icons for show/hide functionality

// const Signin = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user', // Default role set to 'user'
//     });

//     const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
//     const [passwordVisible, setPasswordVisible] = useState(false); // State to track password visibility
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleCheckboxChange = (e) => {
//         setIsChecked(e.target.checked);
//     };

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Check if any of the input fields are empty
//         if (!formData.name || !formData.email || !formData.password) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Please fill in all fields.',
//             });
//             return;
//         }

//         // Password validation
//         const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
//         if (!passwordRegex.test(formData.password)) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Password must contain at least one alphabetic character, one digit, one special character, and be at least 8 characters long.',
//             });
//             return;
//         }

//         // Email validation
//         const emailRegex = /\S+@\S+\.\S+/;
//         if (!emailRegex.test(formData.email)) {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Please enter a valid email address.',
//             });
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
//             console.log('API response:', response.data);
            
//             if (response.data) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Registration Successful',
//                     text: 'You have registered successfully.',
//                 });
//                 navigate('/login'); // Redirect to login page after successful registration
//             } else {
//                 Swal.fire({
//                     icon: 'warning',
//                     title: 'Registration Failed',
//                     text: 'Something went wrong...',
//                 });
//             }
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Registration Error',
//                 text: 'An error occurred while trying to register. Please try again later.',
//             });
//         }
//     };

//     return (
//         <div className="loginsignup">
//             <div className="loginsignup-container">
//                 <h1>Register</h1>
//                 <form className="loginsignup-fields" onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Your Name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email Address"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             placeholder="Password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             className="eye-button"
//                             onClick={togglePasswordVisibility}
//                         >
//                             {passwordVisible ? <HiEyeOff /> : <HiEye />}
//                         </button>
//                     </div>

//                     {/* Role Selection Dropdown */}
//                     <select
//                         name="role"
//                         value={formData.role}
//                         onChange={handleChange}
//                         className="loginsignup-role"
//                     >
//                         <option value="user">User</option>
//                         <option value="event-owner">Event Owner</option>
//                         <option value="admin">Admin</option>
//                     </select>

//                     <p className="loginsignup-login">
//                         Already have an account? <a href="/login">Login here</a>
//                     </p>
//                     <div className="loginsignup-agree">
//                         <input
//                             type="checkbox"
//                             name="agree"
//                             id="agree"
//                             checked={isChecked}
//                             onChange={handleCheckboxChange}
//                         />
//                         <label htmlFor="agree">
//                             By continuing, I agree to the terms of use & privacy policy.
//                         </label>
//                     </div>
//                     <button type="submit" disabled={!isChecked}>
//                         Register
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signin;