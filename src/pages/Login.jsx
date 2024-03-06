import { useMutation, gql } from "@apollo/client";
import { useState } from 'react';
import {useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "../utils/AuthContext";


function Login() {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {setUserId, setToken, setUserName } = useAuth();
  const navigate = useNavigate();
  const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user_id
      name
      token
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

    if (name === "email") {    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setEmailError("Please enter a valid email address.");
        } else {
          setEmailError("");
        }       
    }

    if(name === "password"){
      if(value.length < 8){
        setPasswordError("Password should be atleast 8 characters long.");
      } else {
        setPasswordError("");
      }
    }

  };
  

  const PostData = async (e) => {
    console.log(email);
    console.log(password)
    if(userInput.email==="" || userInput.password===""){
      if(userInput.email===""){
        setEmailError("Email is required.");
      }
      if(userInput.password===""){
        setPasswordError("Password is required.");
      }
      window.alert("Please fill all the fields.");
      return;
    }

    if(emailError || passwordError){
      window.alert("Please enter valid email and password.");
      return;
    }


    try {
      const { data } = await loginUser({
        variables: { email: userInput.email, password: userInput.password },
      }); 
      if(data){
          setUserName(data.login.name);
          localStorage.setItem("userName", data.login.name);
          setUserId(data.login.user_id);
          localStorage.setItem("userId", JSON.stringify(data.login.user_id));
          setToken(data.login.token);
          localStorage.setItem("site", (data.login.token));
          window.alert('Login Successful');
          navigate('/jobs');
      }


    } catch (e) {
      window.alert(e.message);
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
                    {emailError && <p className="text-red-500">{emailError}</p>}
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
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
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