import { useState } from 'react';
import {useNavigate, NavLink } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

 
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  const PostData = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch(`${process.env.REACT_APP_BACKEND}/Api/signin`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({user}),
  //   });

  //   //This is how the fetch api works
  //   const data1 = await response.json();
  //   const data2 = response.status;

  //   const errata = data1.error;

  //   if (data2 === 200) {
  //   //   console.log(data1.accessToken);
  //     window.alert('Successfully login');
  //     sessionStorage.setItem("accessToken",data1.accessToken);
  //     // navigate('/');
  //     window.location.reload();
  //   } else {
  //     window.alert(errata);
  //   }
  };

    return (
      <>
      
        <h1>Login</h1>

              <form method="POST">
                <div>
                  <i></i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>

                <div>
                  <i></i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    value={user.password}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>

                <div>

                  <button
                    type="submit"
                    name="signin"
                    id="signin"
                    value="Log In"
                    onClick={PostData}
                  >
                    Log In
                  </button>

                  <NavLink to="/Signup">Register now</NavLink>

                </div>
              </form>


      
      </>
    )
  }

export default Login