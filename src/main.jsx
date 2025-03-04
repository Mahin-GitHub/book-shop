import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import BookDetail from './components/BookDetail/BookDetail'
import ListedBooks from './components/ListedBooks/ListedBooks'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"books/:bookId",
        element:<BookDetail/>,
        loader:()=>fetch('/booksData.json')
      },
      {
        path:"listedBooks",
        element:<ListedBooks/>,
        loader:()=>fetch("/booksData.json")
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
