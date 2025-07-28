import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },{
    path:'/profile',
    element:<Profile/>
  },{
    path:'/description/:id',
    element:<JobDescription/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
