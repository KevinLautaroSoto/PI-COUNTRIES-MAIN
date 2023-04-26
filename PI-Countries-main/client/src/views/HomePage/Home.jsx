import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation, getCountriesByName } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import style from "./Home.module.css";

const Home = () => {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);//se setea en un 1 para que arranque en la 1 pag siempre
    const [countriesPerPage, setcountriesPerPage] = useState(10)//10 es la cant de paises por pag.
    const [order, setOrder] = useState("");
    const indexOfLastCountry = currentPage * countriesPerPage;//empieza en 1*10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;//10 - 10
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)//paises en la pagina actual
     const [name, setName] = useState("");

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]); 

    const handleChange = (event) => {
        setName(event.target.value);
    };
    
    const handleSumit = () => {
        dispatch(getCountriesByName(name.toLocaleLowerCase()));
        setName("")
    };

    const handleFilterStatus = (event) => {
        dispatch(filterCountriesByContinent(event.target.value  ))
    };//funcion encargada de hacer el dispatch a la funcion del reducer que filtra paises por continente

    const handleOrderByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`);//este estado solo existe para poder setear el ordenamiento y pueda renderizarse
    };

    const handleOrderByPopulation = (event) => {
        event.preventDefault();
        dispatch(orderByPopulation(event.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${event.target.value}`);
    };

    return (
        <>
            <h1 className={style.title} >Paises del mundo</h1>
            <div>
                <div> 
                    <input type="search"
                        placeholder="Search a country . . ." 
                        value={name}
                        onChange={handleChange}/>

                    <button type= "button" 
                        // className={styles.searchbtn} 
                        onClick={handleSumit}>
                        search
                    </button>

                </div>
                <select onChange={event => handleOrderByName(event)} >
                    <option value="ascAlfa" >Alfabetico+</option>
                    <option value="descAlfa" >Alfabetico-</option>  
                </select>
                <select onChange={event => handleOrderByPopulation(event)} >
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

{/* <div className={styles.select}>
                <select name="format" id="format" onChange={(e) => handleFilterByActivity(e)}>
                    <option selected disabled>FILTER BY ACTIVITY</option>
                    <option value="Museums">MUSEUMS</option>
                    <option value="Trekking">TREKKING</option>
                    <option value="Scuba diving">SCUBA DIVING</option>
                    <option value="Sky">SKY</option>
                    <option value="Surf">SURF</option>
                    <option value="Gastronomy">GASTRONOMY</option>
                    <option value="Rafting">RAFTING</option>
                    <option value="Ruins">RUINS</option>
                    <option value="Camping">CAMPING</option>
                    <option value="Wine tourism">WINE TOURISM</option>
                </select>
            </div> */}