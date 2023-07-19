import style from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import imageDos from "../../../assets/8634007.png";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.containerText}>
          <div>
            <h1 className={style.tittle}>Oh my dog!</h1>
            <p className={style.p}>
            Welcome to Oh my Dog!Here you will find a wide selection of breeds so that you can find the perfect companion for you and your family.In addition, each breed comes with its details and characteristics so that you can make the best decision when choosing your new friend furry. Explore our selection and find the dog of your dreams!
            </p>
            <div className={style.buttonContainer}>
                <NavLink to="/home" className={style.navlink}>
              <button className={style.button}>
                  Home
              </button>
                </NavLink>
                <NavLink to="/create" className={style.navlink}>
              <button className={style.button}>
                  Add breed
              </button>
                </NavLink>
            </div>
          </div>
        </div>
        <div className={style.circleContainer}></div>
        <img src={imageDos} alt="Dog" className={style.image} />
      </div>
    </div>
  );
};

export default LandingPage;
