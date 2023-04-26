import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { postActivity,getActivities } from "../../redux/actions";

const Form = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const activities = useSelector((state) => state.allActivities);
    const countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: "",
        season: "",
        countries: []
    })

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        console.log(input);
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
            difficulty: 0,
            duration: "",
            season: "",
            countries: []
        });
        history.push("/home");
    };

    return(
        <form onSubmit={submitHandler} >
            <div>
                <label>Name:</label>
                <input type="text" value={input.name} name="name" onChange={handleChange} ></input>
            </div>
            <div>
                <label >Dificulty:</label>
                <input type="number" value={input.difficulty} name="difficulty" onChange={handleChange} ></input>
            </div>
            <div>
                <label >Duration:</label>
                <input type="time" value={input.duration} name="duration" onChange={handleChange} ></input>
            </div>
            <div>
                <label >Season:</label>
                <select onChange={handleSelectSeason} >
                    <option value="autumn" >Autumn</option>
                    <option value="spring" >Spring</option>
                    <option value="summer" >Summer</option>
                    <option value="winter" >Winter</option>
                </select>
            </div>
            <div>
                <select onChange={handleSelectCountries} >
                    {countries.map((count) => (
                        <option value={count.id} >{ count.name }</option>
                    ))}
                </select>
                <ul><li>{input.countries.map(el => el + " ,")}</li></ul>
            </div>
            <button type="submit">CREATE</button>
        </form>       
    );
};

export default Form;