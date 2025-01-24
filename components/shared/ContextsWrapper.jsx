"use client";
import React from "react";
import { NavigationProvider } from "@/contexts/navigationContext";
import { DataProvider } from "@/contexts/dataContext";

const ContextsWrapper = ({ children }) => {
  return (
    <NavigationProvider>
      <DataProvider>
        <div>{children}</div>
      </DataProvider>
    </NavigationProvider>
  );
};

export default ContextsWrapper;
