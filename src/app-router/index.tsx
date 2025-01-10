import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Game from '../components/Game'
import Menu from '../components/Menu'
// import { lazy } from 'react';

export const appRouter = createBrowserRouter([
  {
    path: '/Game-app',
    element: <Menu />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'game',
        element: <Game />,
      },
    ],
  },
])
