"use client";
import React, { createContext, useState, useContext } from "react";
import { usePathname } from "next/navigation";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(pathname);

  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
