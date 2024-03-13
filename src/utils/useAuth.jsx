import { useState, useEffect } from "react";
import axios from "axios";
const useAuth = (baseUrl) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/auth/login`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status !== 200) {
        throw new Error("Login failed");
      }

      const data = response.data;
      setIsLoggedIn(true);
      setUser(user);
      setError(null);
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      await fetch(`${baseUrl}//api/auth/logout`);
      localStorage.removeItem("userData");
      setIsLoggedIn(false);
      setUser(null);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const user = await JSON.parse(localStorage.getItem("userData"));
      setIsLoggedIn(Boolean(user));
      setUser(user);
    };

    checkLogin();
  }, []);

  return { isLoggedIn, user, login, logout, error };
};

export default useAuth;
