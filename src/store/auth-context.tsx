import React, { useCallback, useState } from "react";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<{
  token: string | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}>({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return {
    token: storedToken,
  };
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const tokenData = retrieveStoredToken();
  let initialToken = tokenData.token || null;

  const [token, setToken] = useState<string | null>(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = () => {
    setToken("LOGGED IN");
    localStorage.setItem("token", "LOGGED IN");
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
