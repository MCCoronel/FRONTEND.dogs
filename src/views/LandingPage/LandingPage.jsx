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
            ¡Bienvenido a Oh my Dog! Si eres amante de los perros, este es el lugar perfecto para ti. Aquí encontrarás una amplia selección de razas para que puedas encontrar el compañero perfecto para ti y tu familia. Además, cada raza viene con sus detalles y características para que puedas tomar la mejor decisión al elegir a tu nuevo amigo peludo.

Pero eso no es todo, también te damos la oportunidad de compartir a tu perro favorito con otros amantes de los caninos. Puedes subir fotos y detalles de tu adorable compañero para que todos puedan ver lo especial que es. ¡Comparte la felicidad y el cariño que tu perro brinda al mundo!

Explora nuestra selección de razas y comparte la alegría de tener un perro en tu vida. ¡Oh my Dog te da la bienvenida a esta comunidad llena de amor por los perros!
            </p>
            <div className={style.buttonContainer}>
                <NavLink to="/home" className={style.navlink}>
              <button className={style.button}>
                  Home
              </button>
                </NavLink>
                <NavLink to="/create" className={style.navlink}>
              <button className={style.button}>
                  Add your dog
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
