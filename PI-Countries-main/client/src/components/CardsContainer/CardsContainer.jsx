import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = (props) => {
    
    return (
        <div className={style.CardsContainer}>
            {props.countries && props.countries.map(country => {
            return <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
            />       
            })}
        </div>
    )
};

export default CardsContainer;