import style from "./Home.module.css";
import { CardsContainer, SideBar } from "../../Components";
import imgGit from "../../../assets/github.png";
import imgLinkedin from "../../../assets/linkedin.png";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBreeds } from "../../redux/actions";

const Home = () => {
  return (
    <div className={style.containerHome}>
      <SideBar />
      <CardsContainer />
      <footer className={style.footer}>
        <p>
          © 2023 MCCoronel. All rights reserved.
          <a href="https://github.com/MCCoronel" target="_blank" rel="noopener noreferrer">
            <img src={imgGit} alt="Github" className={style.imageCheck} />
          </a>
          <a href="https://www.linkedin.com/in/mcelestecrnl/" target="_blank" rel="noopener noreferrer">
            <img src={imgLinkedin} alt="Linkedin" className={style.imageCheck} />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
