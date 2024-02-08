import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Create Context
const SignupNavigationContext = createContext();

// Provider Component
export const SignupNavigationProvider = ({ children }) => {
  const location = useLocation();
  const [navigationState, setNavigationState] = useState({
    isMainSignup1: false,
    isMainSignup2: false,
    isReview: false,
  });

  useEffect(() => {
    // Determine the current step based on the location
    const isMainSignup1 = !location.pathname.includes('mainsignup2') && !location.pathname.includes('mainsignup3') && !location.pathname.includes('review');
    const isMainSignup2 = location.pathname.includes('mainsignup2');
    const isReview = location.pathname.includes('review');
    setNavigationState({ isMainSignup1, isMainSignup2, isReview });
  }, [location]);

  return (
    <SignupNavigationContext.Provider value={navigationState}>
      {children}
    </SignupNavigationContext.Provider>
  );
};

// Custom hook to use the navigation context
export const useSignupNavigation = () => useContext(SignupNavigationContext);
