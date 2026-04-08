import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello React Router</div>
  },
  {
    path: "about",
element: <div>Welcome to react route</div>

  },
  {
    path: "app",
Component:App

  },
  {
    path: "/app2",
    element:<App></App>
    // Component:App
  }
 ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
