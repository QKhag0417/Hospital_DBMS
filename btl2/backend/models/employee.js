const database = require('../database/database');

const getEmployeebyID = async (id) => {

    try {
        const [result] = await database.query('SELECT * FROM employee WHERE employee_id = ?', [id]);

        return result;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    getEmployeebyID
};