import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }

    setIsLoading(false);
  }, []);

  function login(username, pass) {
    if (username === "admin" && pass === "1234") {
      const fakeToken = "dG9rZW5GYWxzbzEyMzQ==";
      setToken(fakeToken);
      setUser(username);
      localStorage.setItem("user", username);
      localStorage.setItem("token", fakeToken);
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
