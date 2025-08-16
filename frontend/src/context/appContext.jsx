import React, { createContext, useContext } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const usePersistentState = (key, defaultValue) => {
  const [state, setState] = React.useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key}:`, error);
      return defaultValue;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
    }
  }, [key, state]);

  return [state, setState];
};

export const AppProvider = ({ children }) => {
  const [page, setPage] = usePersistentState('page', 0);
  const [features, setFeatures] = usePersistentState('features', {
    goals: [],
    skillSet: [],
    duration: "",
    confidence: "",
    behavior: ""
  });
  const [isAuthenticated, setIsAuthenticated] = usePersistentState('isAuthenticated', false);
  const [isActive1, setIsActive1] = usePersistentState('isActive1', {
    "AI-Driven Speech Analysis": false,
    "Storytelling mastery": false,
    "Commanding authority": false,
    "Captivating presence": false,
    "Vocal charisma": false,
    "Influential personality": false
  });
  const [isActive2, setIsActive2] = usePersistentState('isActive2', {
    "Precise Expression": false,
    "Powerful projection": false,
    "Consistent tonality": false,
    "Captivating delivery": false,
    "Spontaneous oration": false,
    "Seamless flow of speech": false
  });
  const [isActive3, setIsActive3] = usePersistentState('isActive3', "");
  const [isActive4, setIsActive4] = usePersistentState('isActive4', "");
  const [isActive5, setIsActive5] = usePersistentState('isActive5', "");
  const [orgDetails, setOrgDetails] = usePersistentState('orgDetails', {});
  const [userDetails, setUserDetails] = usePersistentState('userDetails', {});
  const [selectedTest, setSelectedTest] = usePersistentState('selectedTest', {});

  return (
    <AppContext.Provider value={{
      isActive5, setIsActive5,
      selectedTest, setSelectedTest,
      userDetails, setUserDetails,
      orgDetails, setOrgDetails,
      isAuthenticated, setIsAuthenticated,
      page, setPage,
      features, setFeatures,
      isActive1, setIsActive1,
      isActive2, setIsActive2,
      isActive3, setIsActive3,
      isActive4, setIsActive4
    }}>
      {children}
    </AppContext.Provider>
  );
};