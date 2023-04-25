const { Router } = require("express");
const { createActivityHandler, getActivityHandler } = require('../handlers/activitiesHandler');

const activitiesRouter = Router();

activitiesRouter.post("/", createActivityHandler);
// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).

activitiesRouter.get("/", getActivityHandler);
// Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.


module.exports = activitiesRouter;