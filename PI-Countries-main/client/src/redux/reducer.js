import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRIES_BY_NAME, GET_COUNTRIES_BY_ID, GET_ACTIVITIES } from "./actions";

const initialState = {
    countries: [],
    allCountries: [],//*1
    allActivities: [{
	        name: "correr",
            difficulty: 3,
	        duration: "0:4",
	        season: "winter",
	        countries: "SVK"
        }
    ],
    detail: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries;
            const countriesFilter = action.payload === "allCont" ? allCountries : allCountries.filter(el => el.continent === action.payload)   
            return {
                ...state,
                countries: countriesFilter  
            }
        case ORDER_BY_NAME:
            let sortedArrAlfa = action.payload === "ascAlfa" ? state.countries.sort((a,b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0
            }) :
                state.countries.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0
                })
            return {
                ...state,
                countries: sortedArrAlfa
            }
        case ORDER_BY_POPULATION:
            let sortedArrPopul = action.payload === "ascPobl" ? state.countries.sort((a,b) => {
                if (a.population > b.population) {
                    return -1;
                }
                if (b.population > a.population) {
                    return 1;
                }
                return 0
            }) :
                state.countries.sort((a, b) => {
                if (a.population > b.population) {
                    return 1;
                }
                if (b.population > a.population) {
                    return -1;
                }
                return 0
                })
            return {
                ...state,
                countries: sortedArrPopul
            }
        case GET_COUNTRIES_BY_NAME:
            return {...state, countries: state.countries.filter(
                (country) => country.name.toLowerCase().includes(action.payload))
            }
        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                detail: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload
            }
        case "POST_ACTIVITIES":
            return {
                ...state
            }
        default:
            return { ...state };
    };
};

export default rootReducer;

//*1 creando una segunda copia en el estado general con todos los paises lo que hago es asegurarme que esa constante siempre tenga todos los paises guardados sin variar y en las actions como filter by countries que tengo que modificar lo que contiene countries, luego puedo seguir filtrando entre todos los paises y guardarlo en countries sin problemas.