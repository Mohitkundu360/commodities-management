"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define User and Context types
interface User {
  role?: string; // add other user properties as needed
  // e.g. id: string, name: string, email: string etc.
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

// Initialize context with `undefined` to enforce checks
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  function login() {
    // your login logic here, e.g. setUser(...)
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
