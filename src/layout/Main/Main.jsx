import { Outlet } from "react-router-dom";
import Header from "../../Page/Header";


export default function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  )
}
