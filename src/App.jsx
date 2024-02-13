//separate file for routing to keep App.js clean
import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Landingpage from './pages/Landingpage'
import Signup from './pages/signup/Signup';
import Page1 from './pages/signup/Page1';
import Page2 from './pages/signup/Page2';
import Login from './pages/Login';
import Review from './pages/signup/Review';
import Jobs from './pages/job/Jobs';
import Jobdetails from './pages/job/JobDetails';
import Confirmation from './pages/job/Confirmation';
import Jobview from './pages/job/JobView';
// import 'dotenv/config';

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
              element: <Page1/>
             },
             {
              path: "mainsignup2", 
              element: <Page2 />
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
