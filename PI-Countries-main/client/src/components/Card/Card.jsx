import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Card.module.css"

const Card = (props) => {

    return (
        <Link key = { props.id } to = {`/home/${props.id}`} >
        <div className={style.card}>
            <img src={props.flag} alt="Flag" className={style.flag} />
            <p className={style.name} >{props.name}</p>
            <p className={style.continent} >{props.continent}</p>
        </div>
        </Link>
    )
};

export default Card;