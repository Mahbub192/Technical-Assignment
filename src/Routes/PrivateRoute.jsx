import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingImage from "../assets/98432-loading";
import { AuthContext } from "../providers/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  console.log(10, "user")
  console.log("loading", loading);
  setTimeout(() => {
    setLoading(false)
  }, 1500);
  if (loading) {
    return (
      <div className="h-80vh">
        <Lottie className="h-screen" animationData={loadingImage} loop={true} />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
