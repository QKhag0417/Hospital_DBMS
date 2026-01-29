const database = require('../database/database');

const getPa= async () => {

    try {
        
        const query = 'SELECT * FROM patient';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getAss= async () => {

    try {
        const query = 'SELECT * FROM assignment';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getExam= async () => {

    try {
        const query = 'SELECT * FROM examination';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const gettreat= async () => {

    try {
        const query = 'SELECT * FROM treatment';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getcare= async () => {

    try {
        const query = 'SELECT * FROM care_taking';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getmed= async () => {

    try {
        const query = 'SELECT * FROM medication';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getbi= async () => {

    try {
        const query = 'SELECT * FROM bill';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getwork= async () => {

    try {
        const query = 'SELECT * FROM working_place';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

const getspecial= async () => {

    try {
        const query = 'SELECT * FROM specialties';

        const result = await database.query(query);

        return result.rows;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPa,
    getAss,
    getExam,
    gettreat,
    getcare,
    getmed,
    getbi,
    getwork,
    getspecial
};