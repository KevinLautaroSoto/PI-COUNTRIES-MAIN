const { createActivity, getAllActivities } = require("../controllers/activitiesControllers");

const createActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        const newActivity = await createActivity(name, difficulty, duration, season, countries);
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const getActivityHandler = async (req, res) => {
    try {
        const allActivities = await getAllActivities();
        res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = {
    createActivityHandler,
    getActivityHandler
};