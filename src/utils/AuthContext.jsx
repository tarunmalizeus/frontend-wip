import { useContext, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);;

export const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
    const [token, setToken] = useState(localStorage.getItem("site") || "");
  return <AuthContext.Provider
  value={{
    userId,
    setUserId,
    userName,
    setUserName,
    token,
    setToken,
  }}
  >{children}</AuthContext.Provider>;
};


