const database = require('../database/database');

const getDependentbyID = async (id) => {

    try {
        const [result] = await database.query('SELECT * FROM dependent WHERE patient_id = ?', [id]);

        return result;

    } catch (err) {
        throw err;
    }
}

const getFamily = async (id) => {
    try {
        const result = await database.query('SELECT * FROM userinfo WHERE username = $1', [username]);

        return result.rows[0];

    } catch (err) {
        throw err;
    }
}



module.exports = {
    getDependentbyID
};