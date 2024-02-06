import Banner1 from "./Banner1"
import Banner2 from "./Banner2"
import Footer1 from "./Footer1"
import {Outlet } from 'react-router-dom';
import { SignupNavigationProvider } from "../../utils/SignupNavigationContext.jsx";


function Signup() {
    return (
      <SignupNavigationProvider>
      <>
        <h1>Signup</h1>
        <Banner1/>
        <Banner2/>
        <Outlet/>
        <Footer1/>
      </>
      </SignupNavigationProvider>
    )
  }


export default Signup