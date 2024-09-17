'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';
import Loader from '../components/ui/loader/Loader';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const session = await fetchAuthSession();
        if (session.userSub) {
          const currentUser = await getCurrentUser();
          setUser({ id: currentUser ? currentUser.userId : 0 });
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
      const currentUser = await getCurrentUser();
      setUser({
        id: currentUser ? currentUser.userId : 0,
      });
      setLoggedIn(true);
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'état d\'authentification :', error);
      setLoggedIn(false);
      throw error;
    }
  };

  const login = async () => {
    try {
      refreshUser();
      setLoggedIn(true);
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setLoggedIn(false);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  if (isLoggedIn === null) {
    return <Loader />;
  }

  return (
    <UserContext.Provider value={{ isLoggedIn, user, login, logout, refreshUser, setLoggedIn, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
