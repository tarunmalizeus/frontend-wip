import './App.css'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import Landingpage from './pages/Landingpage'
import Signup from './pages/signup/Signup'
import Login from './pages/Login'
import MainSignup1 from './pages/signup/MainSignup/MainSignup1';
import MainSignup2 from './pages/signup/MainSignup/MainSignup2';
import Review from './pages/signup/MainSignup/Review';
import Jobs from './pages/JobView/Jobs';
import Jobdetails from './pages/JobApply/Jobdetails';
import Confirmation from './pages/JobApply/Confirmation';
import { JobApplyProvider } from './utils/JobApplyContext';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <JobApplyProvider>
      <div className="flex-grow bg-background h-full overflow-auto">
        <Outlet/>
      </div>
      </JobApplyProvider>
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
          element: <Jobs/>
         },
         {
          path:"jobs/:job_id",
          element: <Jobdetails/>
         },
         {
          path: "/confirmation", 
          element: <Confirmation/>
         },         
         

      ]
  },

]);



export { appRouter };
