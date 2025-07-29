import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import { Outlet, Navigate } from "react-router-dom";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);
  
  // use loggedIn to return a Navigate

  if (loggedIn === false){
    return (
      <Navigate to="/sign-up"/>
    )
  }


  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      <Outlet/>
    </main>
  )
}
