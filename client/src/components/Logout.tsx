import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlices.ts";
const logoutUrl = "http://localhost:8080/user/logout";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        logoutUrl,
        {},
        { withCredentials: true }
      );
      toast.success(data.message);
      // Clear user in Redux state
      dispatch(logout());
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="flex justify-center items-center h-100">
      <button
        type="submit"
        className="w-50 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
