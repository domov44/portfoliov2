import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const session = await fetchAuthSession();
        console.log(session.userSub)
       if (session.userSub) {
        const currentUser = await getCurrentUser();
        console.log(currentUser.userId)
        setUser({
          id: currentUser ? currentUser.userId : 0,
        });
        console.log(user)
        setLoggedIn(true);
      }
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'état d\'authentification :', error);
        setLoggedIn(false);
      }
    };

    checkAuthState();
  }, []);

  const refreshUser = async () => {
    try {
      const session = await fetchAuthSession();
      console.log(session.userSub)
     if (session.userSub) {
      const currentUser = await getCurrentUser();
      console.log(currentUser.userId)
      setUser({
        id: currentUser ? currentUser.userId : 0,
      });
      setLoggedIn(true);
    }
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'état d\'authentification :', error);
      setLoggedIn(false);
    }
  };

  const login = () => {
    refreshUser();
    setLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{
      isLoggedIn,
      user,
      login,
      logout,
      refreshUser,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
