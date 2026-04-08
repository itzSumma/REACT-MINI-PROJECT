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
import UserDetails from "./Components/User/UserDetails/UserDetails.jsx";
import Posts from "./Components/Posts/Posts.jsx";
import PostDetail from "./Components/PostDetail/PostDetail.jsx";



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
        element: <Suspense fallback={<span style={{color:"red", fontWeight:"bold"}}>Loading...</span>}>
          <About2 aboutPromise={aboutPromise}></About2>
        </Suspense>
      },
      {
        path: "user/:userId",
        loader : ({params})=>
        //  { console.log("params inside the loaders",params.userId)

           fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        Component:UserDetails
      },
      {
        path:"posts",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      },
      {
        path:"posts/:postId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component:PostDetail
      },
      
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
  {
        path:"*",
        element:`404 PAGE NOT FOUND `
      }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
