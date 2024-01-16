import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout.jsx'
import TicTacTow from './components/TicTacTow.jsx'
import Github from './components/Github.jsx'
import { Provider } from 'react-redux'
import {store} from './Store/store'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='tictactoe' element={<TicTacTow />} />
      <Route 
      path='github' 
      element={<Github />}
       /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
