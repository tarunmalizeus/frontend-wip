import Banner1 from "../../components/Signup/Banner1.jsx"
import Banner2 from "../../components/Signup/Banner2.jsx"
import Footer1 from "../../components/Signup/Footer1.jsx"
import {Outlet } from 'react-router-dom';
import { SignupNavigationProvider } from "../../utils/SignupNavigationContext.jsx";
import { SignupProvider } from '../../utils/SignupContext.jsx';
import { Page1ErrorProvider } from "../../utils/SignupErrorContext.jsx";


function Signup() {
    return (
      <SignupNavigationProvider>
        <div  className='flex flex-col h-full' >
        <SignupProvider>
        <Banner1/>
        <Banner2/>

         <Page1ErrorProvider>
        
        <div className="flex-grow bg-background h-full overflow-auto">
            <Outlet/>
        </div>
        
        <Footer1/>

        </Page1ErrorProvider>

        </SignupProvider>
        </div>
      </SignupNavigationProvider>
    )
  }


export default Signup