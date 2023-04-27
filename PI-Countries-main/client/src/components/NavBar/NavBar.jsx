import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={style.NavBar}>
            <Link className={style.NavItem} to='/home'>HOME</Link>
            <Link className={style.NavItem} to='/create'>FORM</Link>
        </div>
    )
};

export default NavBar;