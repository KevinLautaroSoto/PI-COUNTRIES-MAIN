const { Activity } = require("../db");

const createActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({name, difficulty, duration, season});
    await newActivity.addCountries(countries);
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