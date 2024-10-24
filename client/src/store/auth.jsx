import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [details, setDetails] = useState("")

  const getDetails = async () => {
    try{
        const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/data/detail`,{
          method: "GET",

        });

        if(response.ok){
          const data = await response.json()
          console.log(data.msg)
          setDetails(data.msg)
          console.log("okay")
        }
    }catch(error){
console.log(`services error: ${error}`)
    }
  }

  useEffect(()=>{
    getDetails();
    // userAuthentication()
  }, [])

  return (
    <AuthContext.Provider value={{ user, details }}>
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