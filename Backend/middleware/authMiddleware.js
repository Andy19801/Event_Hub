import jwt from 'jsonwebtoken';
import User from '../models/User.js';


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

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // FIX: Map decoded.userId -> req.user._id
    req.user = {
      _id: decoded.userId,
      role: decoded.role
    };

    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(403).json({ message: "Invalid token" });
  }
};

// export const verifyToken = (req, res, next) => {
//   const authHeader = req.header('Authorization');

//   if (!authHeader) {
//     return res.status(401).json({ message: 'No token provided, authorization denied' });
//   }

//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'Token missing, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // MOST IMPORTANT FIX:
//     req.user = {
//       _id: decoded.userId,   // your token contains userId, not _id
//       role: decoded.role,
//     };

//     next();
//   } catch (error) {
//     console.error('Token verification failed:', error.message);
//     return res.status(403).json({ message: 'Invalid token, access denied' });
//   }
// };

// export const verifyToken = (req, res, next) => {
//   // Get token from the Authorization header
//   const token = req.header('Authorization')?.split(' ')[1];

//   // Check if token exists
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided, authorization denied' });
//   }

//   try {
//     // Verify token using the secret key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // Attach decoded user info to request object (req.user)
//     req.user = decoded;
    
//     // Continue to the next middleware
//     next();
//   } catch (error) {
//     console.error('Token verification failed:', error.message);
//     return res.status(403).json({ message: 'Invalid token, access denied' });
//   }
// };