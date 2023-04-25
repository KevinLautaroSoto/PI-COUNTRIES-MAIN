import style from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={style.card}>
            <p className={style.name} >{props.name}</p>
            <img src={props.flag} alt="Flag" className={style.flag} />
            <p className={style.continent} >{props.continent}</p>
        </div>
    )
};

export default Card;