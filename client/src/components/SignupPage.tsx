import SignupForm from "./SignupForm";
import axios from "axios";
import { toast } from "react-hot-toast";

const registeruserurl = "http://localhost:8080/user/";
const SignupPage = () => {
  const handleSignup = async (
    fullName: string,
    password: string,
    email: string
  ) => {
    try {
      let { data } = await axios.post(
        registeruserurl,
        {
          fullName,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {}
  };
  return (
    <div className="h-[650px] flex items-center justify-center bg-gray-200">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">SignUp</h2>
        <SignupForm onSignup={handleSignup} />
      </div>
    </div>
  );
};

export default SignupPage;
