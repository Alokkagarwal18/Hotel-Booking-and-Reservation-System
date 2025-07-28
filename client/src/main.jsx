// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <SearchContextProvider>
//         <App />
//       </SearchContextProvider>
//     </AuthContextProvider>
//   </React.StrictMode>
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { SearchContextProvider } from './context/SearchContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
      </AuthContextProvider>
   
  </StrictMode>
);
