//separate file for routing to keep App.js clean
import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Landingpage from './pages/Landingpage'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login'
import MainSignup1 from './pages/Signup/Page1';
import MainSignup2 from './pages/Signup/Page2';
import Review from './pages/Signup/Review';
import Jobs from './pages/Job/Job';
import Jobdetails from './pages/Job/JobDetails';
import Confirmation from './pages/Job/Confirmation';
import Jobview from './pages/Job/JobView';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex-grow bg-background h-full overflow-auto">
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
              element: <MainSignup1/>
             },
             {
              path: "mainsignup2", 
              element: <MainSignup2 />
             }, 
             {
              path: "review", 
              element: <Review/>
             },
            ]
         },

         {
            path: "/login",
            element: <Login/>
         },

         {
          path: "/jobs", 
          element: <Jobs/>,
          children:[
            {
              index:true,
             element: <Jobview/>
            },
            {
             path: ":job_id", 
             element: <Jobdetails/>
            },
            {
              path: "confirmation", 
              element: <Confirmation/>
             },         
             
          ]
         },


      ]
  },

]);



export { appRouter };
