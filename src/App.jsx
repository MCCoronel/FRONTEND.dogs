//import React from "react";
import { LandingPage, Home, Detail, Form } from "./views";
import { NavBar } from "./Components";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBreeds } from "./redux/actions";
import "../default.css";

function App() {
  const dispatch = useDispatch();

  const breeds = useSelector((state) => state.breedsFilteredAndOrdered);

  useEffect(() => {
    !(breeds.lenght) && dispatch(getBreeds());
  }, []);

  const location = useLocation();

  
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
