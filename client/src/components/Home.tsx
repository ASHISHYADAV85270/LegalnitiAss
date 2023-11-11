import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/authSlices.ts";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlices.ts";
const checkAuth = "http://localhost:8080/user/";

const Home = () => {
  const userDetail = useSelector(selectUser);
  const dispatch = useDispatch();
  async function checkUserisPresent() {
    try {
      let { data } = await axios.get(checkAuth, { withCredentials: true });
      console.log(data);
      if (data.success) {
        dispatch(setUser(data.user));
      }
    } catch (error) {}
  }
  useEffect(() => {
    checkUserisPresent();
  }, []);
  return (
    <div className=" h-86 bg-gray-100">
      <section className="bg-gray-800 text-white h-100 border-t-2 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-semibold mb-3 mt-1">
            Welcome to LegalNiti
          </h2>
          <p className="text-lg h-[585px]">
            {userDetail !== null ? (
              <h1>
                Hii
                <span className="text-red-500 text-lg capitalize ml-2 mr-3">
                  {userDetail.fullName}
                </span>
                How are you ?
              </h1>
            ) : (
              <h1>Login Please To Enjoy Features of LegalNiti</h1>
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
