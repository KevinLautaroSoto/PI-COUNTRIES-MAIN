import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export const getCountries = () => {
    return async function (dispatch) {
        const dbCountries = await axios.get("http://localhost:3001/countries");
        const countries = dbCountries.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    }
};

export const filterCountriesByContinent = (payload) => {
    return {
    type: FILTER_BY_CONTINENT,
        payload
    }
};


export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
};

export const orderByPopulation = (payload) => {
    return {
        type: ORDER_BY_POPULATION,
        payload
    }
};

export const getCountriesByName = (payload) => {
    return {
        type: GET_COUNTRIES_BY_NAME,
        payload
    }
};

export const getCountriesById = (id) => {
    return async function (dispatch) {
        await axios(`http://localhost:3001/countries/${id}`)
        .then((data) => dispatch({
            type: GET_COUNTRIES_BY_ID,
            payload: data.data
        }));
    }
};

export const getActivities = () => {
    return async function (dispatch) {
        try {
            const info = await axios.get("http://localhost:3001/activities")
            return dispatch({ type: GET_ACTIVITIES, payload: info.data });
        } catch (error) {
            return ({error: error.message})
        }
    }
};

export const filterByActivities = (payload) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload
    }
};

export const postActivity = (payload) => {
    
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/activities", payload)
        console.log(response);
        return response
    }   
};