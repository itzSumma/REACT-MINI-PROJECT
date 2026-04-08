import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Home/Mobiles/Mobiles.jsx";
import Laptop from "./Components/Laptop/Laptop.jsx";
import About from "./Components/About/About.jsx";
import About2 from "./Components/About2/About2.jsx";



const aboutPromise=fetch("https://jsonplaceholder.typicode.com/users").then (res=>res.json());
const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello React Router</div>
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "Mobiles",
        Component: Mobiles,
      },
      {
        path: "Laptop",
        Component:Laptop
      },
      {
        path: "About",
        loader:()=> fetch ("https://jsonplaceholder.typicode.com/users"),
        Component:About
      },
      {
        path :"about2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <About2 aboutPromise={aboutPromise}></About2>
        </Suspense>
      }
    ],
  },
  // {
  //   path: "about",
  //   element: <div>Welcome to react route</div>,
  // },
  {
    path: "app",
    Component: App,
  },
  {
    path: "/app2",
    element: <App></App>,
    // Component:App
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
