import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";

const Home = () => {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);//se setea en un 1 para que arranque en la 1 pag siempre
    const [countriesPerPage, setcountriesPerPage] = useState(10)//10 es la cant de paises por pag.
    const indexOfLastCountry = currentPage * countriesPerPage;//empieza en 1*10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;//10 - 10
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)//paises en la pagina actual

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]); 

    const handleFilterStatus = (event) => {
        dispatch(filterCountriesByContinent(event.target.value  ))
    };//funcion encargada de hacer el dispatch a la funcion del reducer que filtra paises por continente

    return (
        <>
            <h1>Este es el Home</h1>
            <div>
                <select>
                    <option value="ascAlfa" >Alfabetico+</option>
                    <option value="descAlfa" >Alfabetico-</option>  
                </select>
                <select>
                    <option value="ascPobl" >Poblacion+</option>
                    <option value="descPobl" >Poblacion-</option>
                </select>
                <select onChange={event => handleFilterStatus(event)} >
                    <option value="allCont" >Todos</option>
                    <option value="Africa" >Africa</option>
                    <option value="Antarctica" >Antarctica</option>
                    <option value="Asia" >Asia</option>
                    <option value="Europe" >Europe</option>
                    <option value="North America" >North America</option>
                    <option value="Oceania" >Oceania</option>
                    <option value="South America" >South America</option>
                </select>
            </div>
            <CardsContainer
                countries={currentCountries}
            />
            <Paginado
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginated={paginated}
            />
        </>
    )
};

export default Home;