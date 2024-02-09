import {Link } from 'react-router-dom';

function Header() {
    return (
      <>
        <div >
            <ul className='flex flex-row justify-around'>
                <Link to="/">
                    <li   >Landingpage</li>
                </Link>

                <Link to="/signup">
                <li >Signup</li>
                </Link>

                <Link to="/login">
                <li >Login</li>
                </Link>


                <Link to="/jobs">
                <li >Jobs</li>
                </Link>

                <Link to="/confirmation">
                <li >Confirmation</li>
                </Link>

              </ul>
        </div> 
      </>
    )
  }

export default Header