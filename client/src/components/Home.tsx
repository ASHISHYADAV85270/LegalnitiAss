import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/authSlices.ts";
const Home = () => {
  const userDetail = useSelector(selectUser);
  // console.log(userDetail);
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
