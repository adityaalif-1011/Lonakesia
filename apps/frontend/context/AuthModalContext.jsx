"use client";

import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

export function AuthModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("login");

  const openLogin = () => {
    setMode("login");
    setIsOpen(true);
  };

  const openSignup = () => {
    setMode("signup");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        mode,
        openLogin,
        openSignup,
        closeModal,
        setMode,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  return useContext(AuthModalContext);
}