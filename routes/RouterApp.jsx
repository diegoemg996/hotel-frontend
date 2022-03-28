import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import { Index } from '../pages/Index';
import { Login } from '../pages/login/Login';
import { Signin } from '../pages/Signin';


export const RouterApp = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/" element={<Index/>}/>
        </Routes>
    </Router>
  )
}
