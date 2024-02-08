import {Link } from 'react-router-dom';

function Header() {
    return (
      <>
        <h1> Header</h1>

        <div >
            <ul style={{display:"flex"}}>
                <Link to="/">
                    <li   >Landingpage</li>
                </Link>

                <Link to="/signup">
                <li >Signup</li>
                </Link>

                <Link to="login">
                <li >Login</li>
                </Link>


                <Link to="jobs">
                <li >Jobs</li>
                </Link>

              </ul>
        </div> 
      </>
    )
  }

export default Header