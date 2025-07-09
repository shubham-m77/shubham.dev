'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface ContactBoxContextType {
  isContactBoxOpen: boolean;
  setIsContactBoxOpen: (open: boolean) => void;
  router:any
}

// Create the context with default values
const ContactBoxContext = createContext<ContactBoxContextType | undefined>(undefined);

// Provider component
export const ContactBoxProvider = ({ children }: { children: ReactNode }) => {
  const [isContactBoxOpen, setIsContactBoxOpen] = useState(false);
  const router =useRouter();
  return (
    <ContactBoxContext.Provider value={{ isContactBoxOpen, setIsContactBoxOpen,router }}>
      {children}
    </ContactBoxContext.Provider>
  );
};

// Custom hook to use the context
export const useContactBox = () => {
  const context = useContext(ContactBoxContext);
  if (!context) {
    throw new Error('useContactBox must be used within a ContactBoxProvider');
  }
  return context;
};
