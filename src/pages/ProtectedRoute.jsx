import { useAuth } from "../utils/AuthContext";
import { Navigate,Outlet} from "react-router-dom";

function ProtectedRoute() {
    const user = useAuth();
    const token = user.token;
    const isAuthenticated = !!token;

    if (isAuthenticated) {
        return <Outlet />; 
    } else {
        window.alert('Login to continue'); 
        return <Navigate to="/login" replace />;  
    }

  }

export default ProtectedRoute