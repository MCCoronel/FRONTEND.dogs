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
              Welcome to Oh my Dog! If you are a dog lover, this is the perfect
              perfect place for you. Here you will find a wide selection of
              breeds so you can find the perfect companion for you and your
              family. family. In addition, each breed comes with its details and
              characteristics so you can make the best decision when choosing
              your new furry friend. your new furry friend. But that is not all,
              we also give you the opportunity to share your favorite dog with
              other canine lovers. canine lovers. You can upload photos and
              details of your adorable so everyone can see how special he or she
              is. Share the happiness and love your the happiness and love your
              dog brings to the world! Explore our selection of breeds and share
              the joy of having a dog in your life. Oh my Dog welcomes you to
              this community full of love for dogs!
            </p>
            <div className={style.buttonContainer}>
              <NavLink to="/home" className={style.navlink}>
                <button className={style.button}>Home</button>
              </NavLink>
              <NavLink to="/create" className={style.navlink}>
                <button className={style.button}>Add your dog</button>
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
