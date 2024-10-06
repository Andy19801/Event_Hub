import User from '../models/User.js'; // Assuming User is your model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Common function to handle login logic
const handleLogin = async (req, res, role) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email, role }); // Check both email and role
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, message: 'Login successful', role: user.role });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Role-based login functions
export const userLogin = (req, res) => handleLogin(req, res, 'user');
export const eventOwnerLogin = (req, res) => handleLogin(req, res, 'eventOwner');
export const adminLogin = (req, res) => handleLogin(req, res, 'admin');

// Signup function (common for all roles)
export const signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: role || 'user', // Default role is 'user'
        });

        // Save the user in the database
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ token, message: 'User registered successfully', role: newUser.role });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


// // Get user profile (Optional)
// export const getUserProfile = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         return res.status(200).json({ user });
//     } catch (error) {
//         return res.status(500).json({ message: 'Error fetching user profile' });
//     }
// };










// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import asyncHandler from 'express-async-handler';
// import User from '../models/User.js';

// // Signup - for new users
// export const signin = asyncHandler(async (req, res) => {
//   const { name, email, password , role } = req.body;

//   // Validate input
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   // Check if the user already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(409).json({ message: 'User already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds default to 10

//   // Create a new user
//   const newUser = new User({ name, email, password: hashedPassword });
//   await newUser.save();

//   res.status(201).json({ message: 'Signup successful' });
// });

// // Login - handles both old users (plain text passwords) and new users (hashed passwords)
// export const login = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Validate input
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   // Find the user by email
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(403).json({ message: 'Invalid email or password' });
//   }

//   // Check if the password matches
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(403).json({ message: 'Invalid email or password' });
//   }

//   // Generate a JWT token
//   const token = jwt.sign(
//     { _id: user._id, email: user.email },
//     process.env.JWT_SECRET,
//     { expiresIn: '24h' }
//   );

//   res.status(200).json({
//     message: 'Login successful',
//     token,
//     name: user.name,
//     email: user.email,
//   });
// });

// // Logout
// export const logout = asyncHandler(async (req, res) => {
//   // Token invalidation logic can be added here if needed
//   res.status(200).json({ message: 'Logged out successfully' });
// });







// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import asyncHandler from 'express-async-handler';
// import User from '../models/User.js';

// // Signup - for new users
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists' });
//     }

//     // Hash the password for new users
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new user with the hashed password
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     return res.status(201).json({ message: 'Signup successful' });
//   } catch (error) {
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // Login - handles both old users (plain text passwords) and new users (hashed passwords)
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(403).json({ message: 'Invalid email or password' });
//     }

//     // If the password is hashed, use bcrypt to compare
//     const isPasswordHashed = user.password.startsWith('$2');
    
//     let isMatch = false;

//     if (isPasswordHashed) {
//       // Compare the password using bcrypt for new users
//       isMatch = await bcrypt.compare(password, user.password);
//     } else {
//       // Compare as plain text for old users
//       isMatch = (password === user.password);
//     }

//     if (!isMatch) {
//       return res.status(403).json({ message: 'Invalid email or password' });
//     }

//     // Optionally: If the user logs in successfully with a plain text password, update to a hashed password
//     if (!isPasswordHashed) {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       user.password = hashedPassword;
//       await user.save();
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { _id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: '24h' }
//     );

//     return res.status(200).json({
//       message: 'Login successful',
//       token,
//       name: user.name,
//       email: user.email,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };

// // Logout
// export const logout = async (req, res) => {
//   // Logic for logging out can depend on your token strategy.
//   res.status(200).json({ message: 'Logged out successfully' });
// };
