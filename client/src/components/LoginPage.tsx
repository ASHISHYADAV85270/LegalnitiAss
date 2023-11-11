// LoginPage.tsx

import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlices.ts";
const loginUrl = "http://localhost:8080/user/login";
const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (email: string, password: string) => {
    try {
      console.log(email, password);
      let { data } = await axios.post(
        loginUrl,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.success) {
        dispatch(setUser(data.user));
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
  };

  return (
    <div className="h-[650px] flex items-center justify-center bg-gray-200">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};
export default LoginPage;
