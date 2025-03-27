import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
