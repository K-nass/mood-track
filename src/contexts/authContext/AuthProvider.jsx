import { createContext, useContext } from "react";
// import { useUserData } from "../userData/UserDataProvider";

import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/Firebase/Firebase";
import { useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  // const { token, dispatch } = useUserData();
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const token = await userCredential.user.getIdToken();
      setToken(token);
      navigate("/");
      return;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
