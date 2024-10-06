// Error handling middleware
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
  
    res.status(err.status || 500).json({
      message: err.message || 'Internal server error',
    });
  };
  









/*   
// middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };
*/
