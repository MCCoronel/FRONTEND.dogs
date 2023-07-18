import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {getBreeds} from "../../redux/actions";
import { useDispatch } from "react-redux";
//import imageNavBar from "../../assets/navbar.png";

const NavBar = () => {
    const dispatch = useDispatch();

    function handlerHome () {
        dispatch(getBreeds());
    }

    return (
        <div className={style.container}>
             {/* <div className={style.imageContainer}>
            
            </div> */}
            <Link to="/" className={style.button}>Welcome</Link>
            <Link to="/home" onClick={handlerHome} className={style.button}>Home</Link>
            <Link to="/create" className={style.button}>Form</Link>
            <SearchBar />
        </div>
    )
}

export default NavBar;