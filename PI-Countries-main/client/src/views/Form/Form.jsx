import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getActivities, getCountries } from "../../redux/actions";
import styles from "./Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const activities = useSelector((state) => state.allActivities);
    const countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: "",
        difficulty: 1,
        duration: "",
        season: "",
        countries: []
    });

    const [errors, setErrors] = useState({
        name: "",
        difficulty: 1,
        duration: "",
        season: "",
        countries: []
    });

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);

    const validate = (input) => {
        if (!input.name) {
            setErrors ({ ...errors, name: "Se requiere un name" })
        } else {
           setErrors ({ ...errors, name: "" }) 
        }
        if (input.name === "") setErrors ({ ...errors, name: "name vacio" })
    };  

    const handleChange = (event) => {
        validate({
            ...input,
            [event.target.name]: event.target.value
        })
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const handleSelectSeason = (event) => {
        setInput({
            ...input,
            season: event.target.value
        })
    };

    const handleSelectCountries = (event) => {
        setInput({
            ...input,
            countries: [...input.countries, event.target.value]
        })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(input);
        dispatch(postActivity(input));
        alert("Actividad Creada!");
        setInput({
            name: "",
            difficulty: 1,
            duration: "",
            season: "",
            countries: []
        });
        history.push("/home");
    };


     return (
    <form onSubmit={submitHandler} className={styles.form}>
  <div className={styles.formGroup}>
    <label className={styles.label}>Name:</label>
    <input type="text" value={input.name} name="name" onChange={handleChange} className={styles.input}/>
    {errors.name && (
      <span className={styles.error}>{errors.name}</span>
    )}
  </div>
  <div className={styles.formGroup}>
    <label className={styles.label}>Difficulty:</label>
    <input type="number" value={input.difficulty} name="difficulty" min="1" max="5" onChange={handleChange} className={styles.input}/>
  </div>
  <div className={styles.formGroup}>
    <label className={styles.label}>Duration:</label>
    <input type="time" value={input.duration} name="duration" onChange={handleChange} className={styles.input}/>
  </div>
  <div className={styles.formGroup}>
    <label className={styles.label}>Season:</label>
    <select onChange={handleSelectSeason} className={styles.select}>
      <option value="autumn">Autumn</option>
      <option value="spring">Spring</option>
      <option value="summer">Summer</option>
      <option value="winter">Winter</option>
    </select>
  </div>
  <div className={styles.formGroup}>
    <select onChange={handleSelectCountries} className={styles.select}>
      {countries.map((count) => (
        <option value={count.id} key={count.id}>{count.name}</option>
      ))}
    </select>
    <ul className={styles.countriesList}>
      {input.countries.map(el => <li key={el}>{el}</li>)}
    </ul>
  </div>
  <button type="submit" className={styles.button}>CREATE</button>
</form>
  )
};

export default Form;