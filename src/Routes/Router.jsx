import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
// import Main from "../layout/Main/Main";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AdminHomePage from "../Page/AdminHomePage";
import ErrorPage from "../Page/ErrorPage";
import AllUser from "../Page/AllUser";
import CustomerHomePage from "../Page/CustomerHomePage";
import TodoList from "../Page/TodoList";
import HRHomePage from "../Page/HRHomePage";
import MyClass from "../Page/MyClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AdminHomePage />,
      },
      {
        path: "/allUser",
        element: <AllUser />,
      },
      {
        path: "/",
        element: <CustomerHomePage />,
      },
      {
        path: "/todoList",
        element: <TodoList />,
      },
      {
        path: "/",
        element: <HRHomePage />,
      },
      {
        path:'/myClass',
        element: <MyClass/>
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);
