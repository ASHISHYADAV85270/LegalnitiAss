import axios from "axios";
import { toast } from "react-hot-toast";

const logoutUrl = "http://localhost:8080/user/logout";
const Logout = () => {
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        logoutUrl,
        {},
        { withCredentials: true }
      );
      toast.success(data.message);
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
