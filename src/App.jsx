import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Landingpage from './pages/Landingpage'
import Signup from './pages/signup/Signup'
import Login from './pages/Login'
import MainSignup1 from './pages/signup/MainSignup1';
import MainSignup2 from './pages/signup/MainSignup2';
import MainSignup3 from './pages/signup/MainSignup3';
import Review from './pages/signup/Review';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex-grow flex-col">
        <Outlet/>
      </div>
      <Footer/>
    </div>
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
            element: <Signup/>,
            children:[
             {
              index:true,
              // path: "mainsignup1",
              element: <MainSignup1/>
             },
             {
              path: "mainsignup2", // This path is for navigating to MainSignup2
              element: <MainSignup2 />
             }, 
             {
              path: "mainsignup3", // This path is for navigating to MainSignup2
              element: <MainSignup3 />
             },
             {
              path: "review", // This path is for navigating to MainSignup2
              element: <Review/>
             }
            ]
         },

         {
            path: "/login",
            element: <Login/>
         },



      ]
  },

]);



export { appRouter };
