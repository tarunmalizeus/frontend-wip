import { useMutation, gql } from "@apollo/client";
import { useState } from 'react';
import {useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "../utils/AuthContext";


function Login() {
  const { userId,setUserId,token, setToken, setUserName, userName } = useAuth();
  const navigate = useNavigate();
  const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user_id
      name
      token
      tokenExpiration
    }
  }
  `;

  const [loginUser] = useMutation(LOGIN_USER);

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

 
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [name]: value });
  };
  

  const PostData = async (e) => {

    try {
      const { data } = await loginUser({
        variables: { email: userInput.email, password: userInput.password },
      }); 
      if(data){
        // console.log(data);

          setUserName(data.login.name);
          localStorage.setItem("userName", data.login.name);
          setUserId(data.login.user_id);
          localStorage.setItem("userId", JSON.stringify(data.login.user_id));
          setToken(data.login.token);
          localStorage.setItem("site", (data.login.token));
          window.alert('Login Successful');
          navigate('/jobs');
      }


    } catch (error) {
      console.error('Error:', error.message);
    }

  };

    return (
      <div className='h-full flex justify-center items-center'>
        <div className='bg-white h-2/3 w-2/5 border-bordertop border-t-4 fle-col'>
                <h1 className='text-2xl text-center mt-2'>Log in</h1>
                <div className='bg-white flex flex-col h-full justify-around items-center p-4' method="POST">

                  <div className='flex flex-col w-full'>
                    <input
                      className='border-b-2'
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Id"
                      value={userInput.email}
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
                      value={userInput.password}
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

                </div>
        </div>
      </div>
    )
  }

export default Login