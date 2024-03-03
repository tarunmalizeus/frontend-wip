import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function PrivateRoute() {
    const user = useAuth();
    console.log(user);
    if(!user.token){
      return <Navigate to="/login" />
    }
    return (
      <>
        <h1>Login to continue</h1>
        <Outlet />
      </>
    )
  }

export default PrivateRoute