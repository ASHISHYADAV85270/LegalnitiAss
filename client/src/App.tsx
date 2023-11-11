import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Logout from "./components/Logout";
import "./index.css";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="about" element={<About />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
