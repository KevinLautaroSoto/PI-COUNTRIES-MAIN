import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = (props) => {
    
    // const countries = useSelector((state) => state.countries);
    
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