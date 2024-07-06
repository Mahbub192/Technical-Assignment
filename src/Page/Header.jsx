import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


export default function Header() {

  // eslint-disable-next-line no-unused-vars
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    //todo add notification
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/registration'>Registration</Link>
      <br/>
      <button onClick={handelLogout} className="btn">
              Logout
            </button>
      
    </div>
  )
}
