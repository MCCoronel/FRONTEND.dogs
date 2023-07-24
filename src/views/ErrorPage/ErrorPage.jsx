import React from "react";
import style from "./ErrorPage.module.css";
import errorImage from "../../../assets/ErrorFondo.png";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className={style.container}>
      <button onClick={handleClick} className={style.buttonBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={style.arrowIcon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>{" "}
        Back
      </button>
      <img src={errorImage} alt="ERROR 404" className={style.error} />
    </div>
  );
};

export default ErrorPage;