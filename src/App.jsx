import './App.css'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Error from './Error/Error'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {index: true, element: <Home/>},
    {path: "home", element: <Home/>},
    {path: "contact", element: <Contact/>},
    {path: "portfolio", element: <Portfolio/>},
    {path: "about", element: <About/>},
    {path: "*", element: <Error/>}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
