
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Navbar from './components/home/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Hospital from './components/Hospital'
import About from './components/About'

const Layout =()=>{
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout /> , 
    children:[
      {
        path:'/',
        element: <Home />
      },{
        path:'contact',
        element: <Contact />
      },{
        path:'services',
        element: <Services />
      },{
        path:'hospital',
        element: <Hospital />
      },{
        path:'about',
        element: <About />
      }
    ]
  }
]);



function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
