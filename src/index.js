import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage';
import Menu from './pages/Menu';
import OurChefs from './pages/OurChefs'
import SignUpPage from './pages/SignUpPage'
import DownloadApp from './pages/DownloadApp';
import AdminPage from './pages/AdminPage';
import BookATable from './pages/BookATable'
import AdminBooking from './pages/AdminBooking';
import ComplaintPage from './pages/ComplaintPage';
import Receipt from './pages/Receipt';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "LoginPage",
    element: <LoginPage/>,
  },
  {
    path: "Menu",
    element: <Menu/>,
  },
  {
    path: "OurChefs",
    element: <OurChefs/>
  },
  {
    path: "SignUpPage",
    element: <SignUpPage/>
  },
  {
    path: "DownloadApp",
    element: <DownloadApp/>
  },
  {
    path: "AdminPage",
    element: <AdminPage />
  },
  {
    path: "BookATable",
    element: <BookATable />
  },
  {
    path: "AdminBooking",
    element: <AdminBooking />
  },
  {
    path: "ComplaintPage",
    element: <ComplaintPage />
  },
  {
    path: "Receipt",
    element: <Receipt />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);