import style from "./Card.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <Link to={`/dogs/${props.id}`}>
          <img src={props.image} alt="Dog" className={style.image} />
        </Link>
      </div>
      <Link to={`/dogs/${props.id}`}>
        <div className={style.name}>
          <h1>{props.name}</h1>
        </div>
      </Link>
      <Link to={`/dogs/${props.id}`}>
        <p className={style.weight}>
          Weight : {props.minWeight} - {props.maxWeight} kg
        </p>
      </Link>
      <div className={style.info}>
        <p>
          Height : {props.minHeight} - {props.maxHeight} cm
        </p>
        <p>
          Life Span : {props.minLifeSpan} - {props.maxLifeSpan} years
        </p>
      </div>
      <Link to={`/dogs/${props.id}`}>
        <button className={style.cardButton}>More info</button>
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  minHeight: PropTypes.number.isRequired,
  maxHeight: PropTypes.number.isRequired,
  minWeight: PropTypes.number.isRequired,
  maxWeight: PropTypes.number.isRequired,
  minLifeSpan: PropTypes.number.isRequired,
  maxLifeSpan: PropTypes.number.isRequired,
};

export default Card;
