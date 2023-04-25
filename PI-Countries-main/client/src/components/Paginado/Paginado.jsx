import React from "react";
import style from "./Paginado.module.css"

const Paginado = ({countriesPerPage, allCountries, paginated}) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={style.paginado}>
                {pageNumbers &&
                    pageNumbers.map(number => {
                        if (number !== 0) {
                            return (
                                <li className={style.number} key={number}>
                                    <a onClick={() => paginated(number)}>{number}</a>
                                </li>
                            )
                        } else {
                            return null; 
                        }
                    })
                }
            </ul>
        </nav>
    )
};  

export default Paginado;