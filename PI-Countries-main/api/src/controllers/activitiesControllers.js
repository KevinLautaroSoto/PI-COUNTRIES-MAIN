const { Activity, Country } = require("../db");

const createActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({name, difficulty, duration, season});
    await newActivity.addCountries(countries);

    for (const countryId of countries) {
        const country = await Country.findByPk(countryId);
        if (country) {
            await country.addActivities(newActivity.id);
        }
    }

    return newActivity;
};

const getAllActivities = async () => {
    const allActivities = await Activity.findAll();
    return allActivities;
};


module.exports = {
    createActivity,
    getAllActivities
};