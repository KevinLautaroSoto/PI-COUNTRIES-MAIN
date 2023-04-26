import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css"
import { useDispatch } from "react-redux";
import { getCountriesById } from "../../redux/actions";

const Card = (props) => {

    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(getCountriesById(event.target.value))
    }

    return (
        <Link key = { props.id } to = {`/home/${props.id}`} >
        <div className={style.card}>
            <p className={style.name} >{props.name}</p>
            <img src={props.flag} alt="Flag" className={style.flag} />
            <p className={style.continent} >{props.continent}</p>
            <input type="text" onChange={handleChange} />    
        </div>
        </Link>
    )
};

export default Card;