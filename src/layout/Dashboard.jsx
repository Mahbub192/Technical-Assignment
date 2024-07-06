import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaSchool,
  FaShoppingCart,
  FaWallet,
  FaPersonBooth,
} from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false)
  const [hr, setHr] = useState(false)
  const [customer, setCustomer] = useState(false)
  console.log(15, user?.email);

useEffect(()=>{
  if(user?.email == 'xyz@gmail.com'){
    setIsAdmin(true)
  }else if(user?.email == "abc@gmail.com"){
    setHr(true)
  }else{
    setCustomer(true)
  }
},[user])

  const handelLogout = () => {
    //todo add notification
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li className="mb-7">
            <div className="avatar mx-auto">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
            <p className="mx-auto text-lg font-medium">{user?.displayName}</p>
            <p className="mx-auto text-lg -mt-3">{user?.email}</p>
          </li>
          {customer && (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Customer Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/todoList">
                  <FaWallet></FaWallet> Todo List
                </NavLink>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/pendingClass">
                  <FaCalendarAlt></FaCalendarAlt> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/allUser">
                  <FaShoppingCart></FaShoppingCart> All users
                </NavLink>
              </li>
            </>
          )}

          {hr && (
            <>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> HR Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/addAClass">
                  <FaHome></FaHome> Add a class
                </NavLink>
              </li>
              <li>
                <NavLink to="/myClass">
                  <FaCalendarAlt></FaCalendarAlt> My Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/home">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classesPage">
              <FaSchool></FaSchool>Classes
            </NavLink>
          </li>
          <li>
            <button onClick={handelLogout}>
              <FaPersonBooth></FaPersonBooth>Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
