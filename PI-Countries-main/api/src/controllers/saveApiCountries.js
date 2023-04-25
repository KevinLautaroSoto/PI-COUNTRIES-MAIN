const axios = require("axios");
const { URL } = process.env;
const {Country} = require("../db");

const getCountriesApi = async () => {
    try {
        const countriesApi = await axios.get(`${URL}`);

        return countriesApi.data.map(country => {
            return {
                id: country.cca3,
                name: country.name.official,
                flag: country.flags[0],
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : "Not Found",
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            };
        });
    } catch (error) {
        return {error: error.message};
    }
};


const saveCountriesDb = async () => {
    try {
        const allCountries = await getCountriesApi();
        // console.log(allCountries);
        const createCountries = await Country.bulkCreate(allCountries);
        
    } catch (error) {
        return {error: error.message};
    }
};


module.exports = saveCountriesDb;