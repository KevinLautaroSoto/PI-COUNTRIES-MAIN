import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.mainContent}>
            <Link to="/home">
                <button className={style.button}>Explorar</button>
            </Link>
        </div>
    )
};

export default Landing;