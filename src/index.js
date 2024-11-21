import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './components/layout'

// function App() {
//   return (
//     <div className='App'>
//       <h1 className='text-5xl'>Test</h1>
//       <p>
//         This is a test
//       </p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
