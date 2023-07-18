import style from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import imageDos from "../../../assets/8634007.png";
// import videDog1 from "../../../assets/videoDog1.mp4";
// import videDog2 from "../../../assets/videoDogs2.mp4";
// import videDog3 from "../../../assets/videoDog3.mp4";
const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.containerText}>
          <div>
            <h1 className={style.tittle}>Oh my dog!</h1>
            <p className={style.p}>
              ¡Bienvenido a Oh my Dog!Aquí encontrarás una amplia selección de
              razas para que puedas encontrar el compañero perfecto para ti y tu
              familia.Además, cada raza viene con sus detalles y características
              para que puedas tomar la mejor decisión al elegir a tu nuevo amigo
              peludo. ¡Explora nuestra selección y encuentra al perro de tus
              sueños!
            </p>
            <div className={style.buttonContainer}>
                <NavLink to="/home" className={style.navlink}>
              <button className={style.button}>
                  Home
              </button>
                </NavLink>
                <NavLink to="/create" className={style.navlink}>
              <button className={style.button}>
                  Add breedfggh
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
