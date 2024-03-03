//separate file for routing to keep App.js clean
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
import Jobdetails from './pages/job/JobDetails';
import Confirmation from './pages/job/Confirmation';
import Jobview from './pages/job/JobView';


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MainHeader from './components/MainHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import {AuthProvider} from './utils/AuthContext';
import ProtectedRoute from './pages/ProtectedRoute';
import { JobApplyProvider } from './utils/JobApplyContext';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000",
  });


  return (
    <div className="flex flex-col h-screen">
      <AuthProvider>
      <Header/>
      <MainHeader/>
      <div className="flex-grow bg-background h-full overflow-auto">
      <ApolloProvider client={client}>
        <Outlet/>
        </ApolloProvider>
      </div>
      </AuthProvider>
      <Footer/>
    </div>
  )
}

const appRouter=createBrowserRouter([
  {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
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
          element:

          <JobApplyProvider>
          <ProtectedRoute>
              <Outlet />
          </ProtectedRoute>
          </JobApplyProvider>

          ,
          children:[
            {
              index:true,
             element: 
             <Jobview/>
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
