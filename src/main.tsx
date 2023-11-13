import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import Favoritos from './routes/Favoritos.tsx'
import App from './App.tsx'
import Login from './routes/Login.tsx'
import SignIn from './routes/SignIn.tsx'
import { UserProvider } from './context/UserContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/favoritos/:id',
        element: <Favoritos />,
      },
    ],
  },
  {
    path: '/login/',
    element: <Login />,
  },
  {
    path: '/sign-in/',
    element: <SignIn />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
