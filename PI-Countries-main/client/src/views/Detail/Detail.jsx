import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  
  const { id } = useParams();
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  console.log(detail);
  return (
    <div>
      <div >
        <p>ID: {detail.id} </p>
        <p>Name: {detail.name} </p>
        <img src={detail.flag} alt='flag'/>
        <p>Continent: {detail.continents} </p>
        <p>Capital: {detail.capital} </p>
        <p>Subregion: {detail.subregion} </p>
        <p>Area: {detail.area} </p>
        <p>Population: {detail.poblacion} </p>
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