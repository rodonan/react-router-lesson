import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route path="about" element={ <About /> }></Route>
    <Route path="sign-up" element={ <SignUp /> }></Route>
    <Route path="articles" element={ <Articles /> }></Route>
    <Route path="articles/:title" element={ <Article /> }></Route>
    <Route path="categories" element={ <Categories /> }>
      <Route path=":name" element={ <Category /> }/>
    </Route>
    <Route path="profile" element={ <Profile /> }>
      <Route path="edit" element={<EditProfileForm />}></Route>
    </Route>
    <Route path="authors/:name" element={ <Author /> }></Route>
  </Route>,
))
  
function App() {
  return (
    <>
      { /* Replace below and add Router Provider*/}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
