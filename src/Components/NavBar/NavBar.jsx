import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
//import {getBreeds} from "../../redux/actions";
import { useDispatch } from "react-redux";
//import imageNavBar from "../../assets/navbar.png";

const NavBar = () => {
  // const dispatch = useDispatch();

  // function handlerHome () {
  //     dispatch(getBreeds());
  // }

  return (
    <div className={style.container}>
      <div className={style.containerButtons}>
        <Link to="/" className={style.button}>
          Welcome
        </Link>
        <Link to="/home" className={style.button}>
          Home
        </Link>
        <Link to="/create" className={style.button}>
          Form
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
