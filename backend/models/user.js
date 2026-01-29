const database = require('../database/database');


const getUserToken = async (username) => {

    try {
        const result = await database.query('SELECT * FROM userinfo WHERE username = $1', [username]);

        return result.rows[0];

    } catch (err) {
        throw err;
    }
}

module.exports = {
    getUserToken
};