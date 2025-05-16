import React, { createContext, useState, useContext } from "react";

// Create a context for the app state
const AppContext = createContext();

// Custom hook to use the app context
export const useAppContext = () => useContext(AppContext);

// Create a provider component for the app context
export const AppProvider = ({ children }) => {
  const [page, setPage] = useState(0); // Initial page state

  const [features, setFeatures] = useState({
    goals : [],
    skillSet : [],
    duration : "",
    confidence : ""
  })

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isActive1, setIsActive1] = useState({
        "AI-Driven Speech Analysis" : false,
          "Storytelling mastery" : false,
          "Commanding authority" : false,
          "Captivating presence" : false, 
          "Vocal charisma" : false,
          "Influential personality" : false});

  const [isActive2, setIsActive2] = useState({
          "Precise Expression" : false,
          "Powerful projection" : false,
          "Consistent tonality" : false,
          "Captivating delivery" : false, 
          "Spontaneous oration" : false,
          "Seamless flow of speech" : false});

  const [isActive3, setIsActive3] = useState("");

  const [isActive4, setIsActive4] = useState("");

  const [orgDetails, setOrgDetails] = useState({});

  const [userDetails, setUserDetails] = useState({});

  const [transcript, setTranscript] = useState("");

  const [selectedTest, setSelectedTest] = useState({});


  return (
    <AppContext.Provider value={{selectedTest, setSelectedTest,userDetails, setUserDetails, orgDetails, setOrgDetails, isAuthenticated, setIsAuthenticated, page, setPage , features, setFeatures, isActive1, setIsActive1, isActive2, setIsActive2, isActive3, setIsActive3, isActive4, setIsActive4 }}>
      {children}
    </AppContext.Provider>
  );
};
