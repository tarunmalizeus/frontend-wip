import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Landingpage from './pages/Landingpage'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const appRouter=createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      // errorElement: <Error/>,
      children: [
          {
              path: "/",
              element: <Landingpage/>
          },
          {
            path: "/signup",
            element: <Signup/>
         },

         {
            path: "/login",
            element: <Login/>
         },
      ]
  },

]);



export { appRouter };
