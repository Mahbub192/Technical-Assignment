import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SocalLogin = () => {
  const { googleLogin } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";
  const handelGoogleLogin = () => {
    googleLogin()
  };

  return (
    <div className="pb-5 px-8">
      <div className="divider"></div>
      <div className="w-full text-center mb-4">
        <button
          onClick={handelGoogleLogin}
          className="btn w-full bg-cyan-300 "
        >
          <FaGoogle></FaGoogle>
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
