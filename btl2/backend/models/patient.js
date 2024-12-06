const database = require('../database/database');

const getPatientbyID= async (id) => {

    try {
        const [result] = await database.query('SELECT * FROM patient WHERE patient_id = ?', [id]);

        return result;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPatientByID
};