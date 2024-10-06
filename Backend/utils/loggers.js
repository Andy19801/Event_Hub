import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module (file)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new Winston logger instance
const logger = winston.createLogger({
  level: 'info', // Default logging level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() // Format logs as JSON
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: path.join(__dirname, 'application.log') }) // Log to a file
  ],
});

// Custom error handling transport
const errorLogger = winston.createLogger({
  level: 'error', // Log only error level messages
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: path.join(__dirname, 'error.log') }) // Log errors to a file
  ],
});

// Export the logger
export { logger, errorLogger };
