import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer ${token}`;

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;

  console.log("isLoggedIn", isLoggedIn);

  // JWT AAUTHENTICATION - to get currently loggedIN user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };
  // tracking the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // to fetch the services data from the database 
  const getServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const services = await response.json();
        console.log(services.msg);
        setServices(services.data);
      }
      console.log("service", response);
    } catch (error) {
        console.log(`services frontend error: ${error}`);
      }
  };
  
  useEffect(() => {
    getServiceData();
    userAuthentication();
  }, []);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};