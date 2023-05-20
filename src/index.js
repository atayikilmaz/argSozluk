import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Success from './Pages/Success';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);

