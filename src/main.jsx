import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Users from './Component/Users/Users';
import UserDetails from './Component/UserDetails/UserDetails';
import Register from './Component/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {path:'/about',
        element: <div>this is about pages </div>
      },
      {path:'/service',
        element: <div>this is service pages </div>
      },
      {path:'/contact',
        element: <div>this is contact pages </div>
      },
      {path:'/register',
        element: <Register></Register>
      },
      {path:'/login',
        element: <div>this is contact pages </div>
      },
      {path:'/users',
        element: <Users></Users>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {path:'/user/:id',
        element: <UserDetails></UserDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
