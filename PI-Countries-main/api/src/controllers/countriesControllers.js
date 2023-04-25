const { Op, Sequelize } = require("sequelize");
const { Country } = require("../db");


const getAllCountries = async () => {
    const allCountries = await Country.findAll();
    return allCountries;
};

const searchCountriesByName = async (name) => {
    const countriesByName = await Country.findAll({
        where: Sequelize.where(Sequelize.fn('UPPER', Sequelize.col('name')), 'LIKE', `%${name.toUpperCase()}%`)//*1
        // where: {
        //     name: {
        //         [Op.like]: `%${name.toUpperCase}%`
        //     }
        // }
    });
    console.log(countriesByName);
    return countriesByName;
};

const getCountryById = async (id) => {
    const country = await Country.findByPk(id.toUpperCase());//recordar el include cuando tenga activities.
    return country;
};


module.exports = {
    getAllCountries,
    searchCountriesByName,
    getCountryById
};


//*1En este ejemplo, se utiliza Sequelize.fn() para aplicar la función UPPER de SQL, que convierte el valor de la columna name a mayúsculas en la base de datos. Luego, se utiliza Sequelize.col() para referenciar la columna name en la base de datos. Finalmente, se utiliza Sequelize.where() para construir una consulta que busca valores que contengan la cadena name proporcionada, sin importar las mayúsculas y minúsculas. El uso de % antes y después de name.toUpperCase() en el valor de búsqueda permite realizar una búsqueda con coincidencia parcial.