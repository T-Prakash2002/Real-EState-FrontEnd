import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from '../src/components/Login.jsx'
import Registeration from './components/Registeration.jsx'
import Home from './components/Home.jsx'
import AddProperty from './shared/AddProperty.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element:<Home />
      },
      {
        path: '/login_page',
        element: <Login />,
      },  
      {
        path: '/register_page',
        element: <Registeration />,
      },{
        path:'/addProperty',
        element:<AddProperty />
      },{
        path:'/editProperty',
        element:<AddProperty />
      },
      {
        path: '*',
        element: <div>404 Page Not Found</div>,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
