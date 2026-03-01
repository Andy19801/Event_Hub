import User from '../models/User.js'; // Assuming User is your model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer";



export const checkStatus = (req, res) => {
    // If the token is valid, req.user will have the decoded user info
    if (req.user) {
      return res.status(200).json({
        isLoggedIn: true,
        role: req.user.role, // Assuming the role is part of the decoded token
      });
    } else {
      return res.status(200).json({
        isLoggedIn: false,
        role: '',
      });
    }
  };

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

        res.status(200).json({
            token,
            message: "Login successful",
            role: user.role,
            user: {
              name: user.name,
              email: user.email,
              role: user.role
            }
          });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Role-based login functions
export const userLogin = (req, res) => handleLogin(req, res, 'user');
export const eventOwnerLogin = (req, res) => handleLogin(req, res, 'event-owner');
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
            { expiresIn: '10h' }
        );

        res.status(201).json({ token, message: 'User registered successfully', role: newUser.role });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



export const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Generate 6-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
      user.otp = otp;
      user.otpExpiry = Date.now() + 10 * 60 * 1000; // valid for 10 min
      await user.save();
  
      // Nodemailer configuration
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
  
      await transporter.sendMail({
        to: user.email,
        subject: "Your OTP Code",
        text: `Your OTP for password reset is ${otp}. It expires in 10 minutes.`
      });
  
      res.json({ message: "OTP sent to email" });
  
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  export const verifyOtpAndResetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }
  
      user.password = await bcrypt.hash(newPassword, 10);
      user.otp = undefined;
      user.otpExpiry = undefined;
      await user.save();
  
      res.json({ message: "Password reset successfully" });
  
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };
  