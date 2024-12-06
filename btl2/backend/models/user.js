const database = require('../database/database');


const getUserByID = async (username) => {

    try {
        const [result] = await database.query('SELECT * FROM user WHERE username = ?', [username]);

        return result;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    getUserByID
};