import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    { 
      path:"/notes",
      element:
      <div>
        <Navbar/>
        <Pastes/>
      </div>


    },

    {
      path:"/notes/:id",
      element:
      <div>
        
        <Navbar/>
        <ViewPaste/>
      </div>


    },


  ]

)
function App() {
  return (
  <div>
    <RouterProvider router = {router}/>
  </div>
  )
}

export default App
