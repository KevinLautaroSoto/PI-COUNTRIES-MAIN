const { getAllCountries, searchCountriesByName, getCountryById } = require("../controllers/countriesControllers");

const getCountriesHandler = async (req, res) => {
    const { name } = req.query; 

    const results = name ? await searchCountriesByName(name) : await getAllCountries();
    try {
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

const getCountriesByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryById(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler
}