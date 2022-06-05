import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  const localAuth = localStorage.getItem("user") || false
  
  return (
    <>
      {
        localAuth ? (
          <Outlet/>
        ) : (
          <Navigate to="login"/>
        )
      }
    </>
  )
}
export default PrivateRoute