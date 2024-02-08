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
      <div className='bg-background h-full flex justify-center items-center'>
        <div className='bg-white h-2/3 w-2/5 border-bordertop border-t-4 fle-col'>
                <h1 className='text-2xl text-center mt-2'>Log in</h1>
                <form className='bg-white flex flex-col h-full justify-around items-center p-4' method="POST">

                  <div className='flex flex-col w-full'>
                    <input
                      className='border-b-2'
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Id"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  <button className="w-full text-right text-sm text-darkgreen"> FORGOT EMAIL ID?</button>
                  </div>

                  
                  <div className='flex flex-col w-full'>
                    <input
                      className='border-b-2'
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleInputs}
                      autoComplete="off"
                    />
                  <button className="w-full text-right text-sm text-darkgreen"> FORGOT PASSWORD?</button>
                  </div>


                  <div className="flex justify-start w-full">
                    <div className="flex">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe" className="ml-2">Remember me</label>
                    </div>
                  </div>

                    <button

                      className="bg-lightgreen  w-1/2 p-2 mt-4"
                      type="submit"
                      name="signin"
                      id="signin"
                      value="Log In"
                      onClick={PostData}
                    >
                      Log In
                    </button>

                  <div className='flex flex-col items-center'>
                    <div className='text-xs'>
                    Not registered yet?
                    </div>

                    <NavLink className='text-darkgreen' to="/Signup">CREATE AN ACCOUNT</NavLink>
                  </div>

                </form>
        </div>
      </div>
    )
  }

export default Login