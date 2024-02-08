import Banner1 from "./Banner1"
import Banner2 from "./Banner2"
import Footer1 from "./Footer1"
import {Outlet } from 'react-router-dom';
import { SignupNavigationProvider } from "../../utils/SignupNavigationContext.jsx";
import { SignupProvider } from './MainSignup/SignupContext.jsx';

function Signup() {
    return (
      <SignupNavigationProvider>
        <div  className='flex flex-col h-full' >
        <Banner1/>
        <Banner2/>

        <SignupProvider>
        <div className="flex-grow bg-background h-full">
        <Outlet/>
        </div>
        </SignupProvider>
        
        <Footer1/>
        </div>
      </SignupNavigationProvider>
    )
  }


export default Signup