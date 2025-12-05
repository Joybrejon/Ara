"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (password?: string) => boolean; // Password is now optional
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Set isLoggedIn to true by default to bypass login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); 
  const navigate = useNavigate();

  // No need to store in localStorage if login is bypassed
  useEffect(() => {
    // If you want to re-enable login later, uncomment this:
    // if (typeof window !== "undefined") {
    //   localStorage.setItem("isLoggedIn", String(isLoggedIn));
    // }
  }, [isLoggedIn]);

  const login = (password?: string) => {
    // Temporarily bypass password check
    setIsLoggedIn(true);
    showSuccess("Login berhasil! (Mode bypass)");
    navigate("/dashboard");
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    showSuccess("Anda telah logout.");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};