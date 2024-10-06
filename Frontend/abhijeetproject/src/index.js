import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Update this line
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

// ErrorBoundary component to catch any errors in the component tree
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render

root.render( // Call render on the root
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css'; // Import global styles
// import App from './App'; // Import the root App component
// import reportWebVitals from './reportWebVitals'; // Performance metrics utility
// import { BrowserRouter } from 'react-router-dom'; // Router for navigation


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // Measure performance in the app
// reportWebVitals();

