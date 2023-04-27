import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = (props) => {
  
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  console.log(detail);
  return (
      <div className={styles.card} >
        <div className={styles.flag} >
          <img src={detail.flag} alt='flag'/>
      </div>
      <div className={styles.detail} >
        <p className={styles.text} >ID: {detail.id} </p>
        <p className={styles.name}>{detail.name}</p>
        <p className={styles.text}>Continent: {detail.continent}</p>
        <p className={styles.text}>Capital: {detail.capital}</p>
        <p className={styles.text}>Subregion: {detail.subregion}</p>
        <p className={styles.text}>Area: {detail.area}</p>
        <p className={styles.text}>Population: {detail.population}</p>
      </div>  
    </div>    
  )
}
  

export default Detail;

// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.