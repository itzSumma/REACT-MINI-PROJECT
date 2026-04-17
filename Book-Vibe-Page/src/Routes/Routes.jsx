import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PageToRead from "../Pages/PageToRead/PageToRead";

 export const router =  createBrowserRouter([{
  path: '/',
  element: <MainLayout/>,
  children:[{
 index:true,
 element: <Homepage/>
  },
{
path:'/books',
element:<Books/>
},{
  path:"/page-to-read",
  element:<PageToRead/>
},{
  path:"/bookDetails/:bookId",
  Component:BookDetails,
  loader:()=>fetch("/booksData.json")
}
],
errorElement: <ErrorPage/>

 },

 

])
