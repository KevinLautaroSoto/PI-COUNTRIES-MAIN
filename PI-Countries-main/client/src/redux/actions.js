import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";

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

export const filterByActivities = (payload) => {
    return {
        type:
    }
};