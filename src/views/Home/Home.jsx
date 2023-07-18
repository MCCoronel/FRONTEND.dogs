import style from "./Home.module.css";
import { CardsContainer, SideBar } from "../../Components";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBreeds } from "../../redux/actions";

const Home = () => {
  return (
    <div className={style.containerHome}>
      <SideBar />
      <CardsContainer />
    </div>
  );
};

export default Home;
