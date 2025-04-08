import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Practice from "./Practice";
import OtpLogin from "./pages/OtpLogin";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import Onboarding1 from "./components/Onboarding1";
import Onboarding2 from "./components/Onboarding2";
import { AppProvider } from "./context/appContext";
import Onboarding3 from "./components/Onboarding3";
import Onboarding4 from "./components/Onboarding4";
import Onboarding5 from "./components/Onboarding5";
import Onboarding6 from "./components/Onboarding6";
import Onboarding7 from "./components/Onboarding7";
import Onboarding8 from "./components/Onboarding8";
import { AnimatePresence, motion } from "framer-motion";
import Onboarding9 from "./components/Onboarding9";
import OrgDashboard from "./pages/OrgDashboard";
import OrgSignUp from "./pages/OrgSignUp";
import OrgLogin from "./pages/OrgLogin";


const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease : "easeInOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 , ease : "easeInOut"} },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

function App() {

  const location = useLocation();

  return (
      <AnimatePresence mode = "wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/otpLogin" element={<OtpLogin/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/practice" element={<Practice/>} />
            <Route path="/onboarding" element={<Onboarding/>} >
              <Route index element={<PageWrapper><Onboarding1 /></PageWrapper>} />
              <Route path="step1" element={<PageWrapper><Onboarding1 /></PageWrapper>} />
              <Route path="step2" element={<PageWrapper><Onboarding2 /></PageWrapper>} />
              <Route path="step3" element={<PageWrapper><Onboarding3 /></PageWrapper>} />
              <Route path="step4" element={<PageWrapper><Onboarding4 /></PageWrapper>} />
              <Route path="step5" element={<PageWrapper><Onboarding5 /></PageWrapper>} />
              <Route path="step6" element={<PageWrapper><Onboarding6 /></PageWrapper>} />
              <Route path="step7" element={<PageWrapper><Onboarding7 /></PageWrapper>} />
              <Route path="step8" element={<PageWrapper><Onboarding8 /></PageWrapper>} />
              <Route path="step9" element={<PageWrapper><Onboarding9 /></PageWrapper>} />
            </Route>
          <Route path="/orgDashboard" element = {<OrgDashboard/>}/>
          <Route path="/orgSignUp" element = {<OrgSignUp/>}/>
          <Route path="/orgLogin" element = {<OrgLogin/>}/>
        </Routes>
      </AnimatePresence>
  )
}

export default App
