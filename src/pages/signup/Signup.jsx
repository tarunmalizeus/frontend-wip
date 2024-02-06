import Banner1 from "./Banner1"
import Banner2 from "./Banner2"
import Footer1 from "./Footer1"
import MainSignup1 from "./MainSignup1"
import MainSignup2 from "./MainSignup2"
import {Outlet } from 'react-router-dom';

function Signup() {
    return (
      <>
        <h1>Signup</h1>
        <Banner1/>
        <Banner2/>
        <Outlet/>
        <Footer1/>
      </>
    )
  }


export default Signup