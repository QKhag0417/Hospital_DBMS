const database = require('../database/database');

const getOtherbyID = async (id) => {
    const idArray = id.split(' ');
    try {
        const result = await database.query('SELECT * FROM employee WHERE employee_id = $1', [idArray[0]]);
        console.log(result.rows[0])
        return result.rows[0];

    } catch (err) {
        throw err;
    }
}

const getMyinfo = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.employee_id, 
            t.fname || ' ' || t.mname || ' ' || t.lname AS name,
            t.age AS age,
            t.gender AS gender,
            t."Fixed_Salary(VND)" AS "Fixed_Salary(VND)",
            t."Bonus(VND)" AS "Bonus(VND)",
            t.phone_number AS phone_number,
            t.experience_year AS experience_year,
            t.working_hour AS working_hour
        FROM 
            employee t
        WHERE 
            t.employee_id = $1;
        `;
        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getworkplace = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.departmentname AS department 
        FROM 
            employee s
        JOIN 
            Working_place t ON t.employee_ID = s.employee_ID
        WHERE 
            t.employee_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getOtherbyID,
    getMyinfo,
    getworkplace
};
