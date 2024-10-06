import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Middleware to check if the user is authenticated
export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded token (user info) to the request object
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Middleware to check if the user is an admin
export const Admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
// Middleware to check specific roles (authorize roles)
export const authorizeRoles = (...roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id);
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: `Access denied. Only ${roles.join(', ')} are allowed.` });
      }
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
};










// // middleware/authMiddleware.js
// import jwt from 'jsonwebtoken';

// export const protect = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };
