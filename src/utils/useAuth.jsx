import { useState, useEffect } from "react";
import axios from "axios";
const useAuth = (baseUrl) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/signin`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status !== 200) {
        throw new Error("Login failed");
      }

      const { data } = response.data;
      setIsLoggedIn(true);
      setUser(user);
      setError(null);
      localStorage.setItem("userData", data);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      await fetch(`${baseUrl}/auth/logout`);
      localStorage.removeItem("userData");
      setIsLoggedIn(false);
      setUser(null);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    setIsLoggedIn(Boolean(user));
  }, []);

  return { isLoggedIn, user, error, login, logout };
};

export default useAuth;
