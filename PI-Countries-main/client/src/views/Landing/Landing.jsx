import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.mainContent}>
            <h1 className={style.title}>Paises del Mundo</h1>
            <Link to="/home">
                <button className={style.button}>Explorar</button>
            </Link>
        </div>
    )
};

export default Landing;