import { GET_COUNTRIES, FILTER_BY_CONTINENT } from "./actions";

const initialState = {
    countries: [],
    allCountries: [],//*1
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return { ...state, countries: action.payload, allCountries: action.payload };
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const countriesFilter = action.payload === "allCont" ? allCountries : allCountries.filter(el => el.continent === action.payload)   
            return {
                ...state,
                countries: countriesFilter  
            }
        default:
            return { ...state };
    };
};

export default rootReducer;

//*1 creando una segunda copia en el estado general con todos los paises lo que hago es asegurarme que esa constante siempre tenga todos los paises guardados sin variar y en las actions como filter by countries que tengo que modificar lo que contiene countries, luego puedo seguir filtrando entre todos los paises y guardarlo en countries sin problemas.