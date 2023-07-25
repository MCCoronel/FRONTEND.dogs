import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions";
import validate from "../../Validation/ValidateForm";
import axios from "axios";
import formImage from "../../../assets/formImage.png";
import formImgCheck from "../../../assets/check.png";

const Form = () => {
  const dispatch = useDispatch();

  //ESTADOS GLOBALES
  const allTemperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  // ESTADOS LOCALES
  const [form, setForm] = useState({
    name: "",
    image: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLifeSpan: "",
    maxLifeSpan: "",
    temperaments: [],
    breed_group: "",
  });

  const [errors, setErrors] = useState({});

  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar u ocultar la alerta

  const [alertTimeout, setAlertTimeout] = useState(null); // Estado para ocultar la alerta

  const [windowWidth, setWindowWidth] = useState(window.innerWidth); //Estado para ocultar la Imagen segun el ancho de la pantalla

  //HANDLERS
  const changeHandler = (event) => {
    //El mismo estado que estoy por setear se lo doy a Validate tambien, ya que la validacion se realiza mas rapido que el cambio de estado, de esta forma le llega lo mismo a los dos
    const newState = { ...form };
    setErrors(
      validate({ ...newState, [event.target.name]: event.target.value })
    );
    setForm({ ...newState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    const endpoint = "http://localhost:3001/dogs";

    event.preventDefault();

    const response = axios
      .post(endpoint, {
        ...form,
        temperaments: form.temperaments.map((temp) => temp.id),
      })
      .then((res) => {
        setShowAlert(true); // Mostrar la alerta si la respuesta es exitosa
        setForm({
          name: "",
          image: "",
          minHeight: "",
          maxHeight: "",
          minWeight: "",
          maxWeight: "",
          minLifeSpan: "",
          maxLifeSpan: "",
          temperaments: [],
          breed_group: "",
        }); // Limpiar el formulario después de enviarlo
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("Error: " + error.response.data.error); // Mostrar un mensaje de alerta si el error es un error 400
        } else {
          console.log(error);
        }
      });
  };

  const selectHandler = (event) => {
    console.log(event.target.value);

    if (
      event.target.value &&
      !form.temperaments.some((temp) => temp.name === event.target.value)
    ) {
      const selectedTemperamentName = event.target.value;
      const selectedTemperamentID =
        event.target.options[event.target.selectedIndex].id;
      const newState = { ...form };

      newState.temperaments = [
        ...newState.temperaments,
        { id: selectedTemperamentID, name: selectedTemperamentName },
      ];
      setErrors(validate(newState));
      setForm(newState);
    }
  };

  const deleteTemperament = (temperament) => {
    let newTemps = form.temperaments.filter((temp) => temp !== temperament);
    setForm({
      ...form,
      temperaments: newTemps,
    });
    setErrors(
      validate({
        ...form,
        temperaments: newTemps,
      })
    );
  };

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  //USE-EFFECT

  useEffect(() => {
    // Ocultar el alerta después de 3 segundos
    if (showAlert) {
      setAlertTimeout(
        setTimeout(() => {
          setShowAlert(false);
        }, 3000)
      );
    }
    // Limpiar el tiempo de espera del alerta cuando se desmonta el componente
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [showAlert]);

  useEffect(() => {
    // Agregar un listener para actualizar el estado cuando cambie el ancho de la ventana
    window.addEventListener("resize", updateWindowWidth);

    // Limpieza del listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={submitHandler}>
        <div className={style.form}>
          <p className={style.heading}>Add a new breed</p>
          {showAlert && ( // Mostrar la alerta si showAlert es verdadero
            <h4 className={style.alert}>
              The Breed was successfully created{" "}
              <img src={formImgCheck} alt="Dog" className={style.imageCheck} />
            </h4>
          )}

          <div>
            <label>Name: </label>
            <input
              type="text"
              placeholder="Black Mongrel"
              value={form.name}
              onChange={changeHandler}
              name="name"
              className={style.input}
            />
            {errors.name && <p className={style.errors}>{errors.name}</p>}
          </div>

          <div>
            <label>Image: </label>
            <input
              type="url"
              placeholder="http://myimageontheweb.com"
              value={form.image}
              onChange={changeHandler}
              name="image"
              className={style.input}
            />
            {errors.image && <p className={style.errors}>{errors.image}</p>}
          </div>

          <div className={style.range}>
            <div>
              <label>Minimun Height: </label>
              <input
                type="number"
                value={form.minHeight}
                onChange={changeHandler}
                name="minHeight"
                className={style.input}
              />
              {errors.minHeight && (
                <p className={style.errors}>{errors.minHeight}</p>
              )}
            </div>

            <div>
              <label>Maximum Height: </label>
              <input
                type="number"
                value={form.maxHeight}
                onChange={changeHandler}
                name="maxHeight"
                className={style.input}
              />
              {errors.maxHeight && (
                <p className={style.errors}>{errors.maxHeight}</p>
              )}
            </div>
          </div>

          <div className={style.range}>
            <div>
              <label>Minium Weight: </label>
              <input
                type="number"
                value={form.minWeight}
                onChange={changeHandler}
                name="minWeight"
                className={style.input}
              />
              {errors.minWeight && (
                <p className={style.errors}>{errors.minWeight}</p>
              )}
            </div>

            <div>
              <label>Maximum Weight: </label>
              <input
                type="number"
                value={form.maxWeight}
                onChange={changeHandler}
                name="maxWeight"
                className={style.input}
              />
              {errors.maxWeight && (
                <p className={style.errors}>{errors.maxWeight}</p>
              )}
            </div>
          </div>

          <div className={style.range}>
            <div>
              <label>Minium Life Span: </label>
              <input
                type="number"
                value={form.minLifeSpan}
                onChange={changeHandler}
                name="minLifeSpan"
                className={style.input}
              />
              {errors.minLifeSpan && (
                <p className={style.errors}>{errors.minLifeSpan}</p>
              )}
            </div>

            <div>
              <label>Maximum Life Span: </label>
              <input
                type="number"
                value={form.maxLifeSpan}
                onChange={changeHandler}
                name="maxLifeSpan"
                className={style.input}
              />
              {errors.maxLifeSpan && (
                <p className={style.errors}>{errors.maxLifeSpan}</p>
              )}
            </div>
          </div>

          <div>
            <label>Breed Group: </label>
            <input
              type="text"
              placeholder="toy, small, medium or large"
              value={form.breed_group}
              onChange={changeHandler}
              name="breed_group"
              className={style.input}
            />
            {errors.breed_group && (
              <p className={style.errors}>{errors.breed_group}</p>
            )}
          </div>

          <div>
            <label>Temperaments: </label>
            <select
              name="temperaments"
              onChange={selectHandler}
              defaultValue="Select one or more typical temperaments of the breed"
              className={style.option}
            >
              <option className={style.option}>
                Select one or more typical temperaments
              </option>
              {allTemperaments?.map((temperament) => (
                <option
                  key={temperament.id}
                  id={temperament.id}
                  value={temperament.name}
                  className={style.option}
                >
                  {temperament.name}
                </option>
              ))}
            </select>

            {errors.temperaments && (
              <p className={style.errors}>{errors.temperaments}</p>
            )}
          </div>

          <br />

          <h4>Selected Temperaments:</h4>
          <div>
            {form.temperaments &&
              form.temperaments.map((temperament) => (
                <button
                  key={temperament.id}
                  onClick={() => deleteTemperament(temperament)}
                  className={style.selectedTemp}
                >
                  {temperament.name}
                </button>
              ))}
          </div>

          <br />

          <button
            type="submit"
            disabled={
              !form.name ||
              !form.image ||
              !form.minHeight ||
              !form.maxHeight ||
              !form.minWeight ||
              !form.maxWeight ||
              !form.minLifeSpan ||
              !form.maxLifeSpan ||
              !form.temperaments.length
            }
            className={style.button}
          >
            Create
          </button>
        </div>
      </form>
      <div
        className={style.imageContainer}
        style={{ display: windowWidth <= 768 ? "none" : "flex" }}
      >
        <img src={formImage} alt="dog" className={style.img} />
      </div>
    </div>
  );
};

export default Form;
