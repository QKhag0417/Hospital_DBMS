const database = require('../database/database');

const getDoctorbyID = async (id) => {
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
            t.employee_id =  $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}


const getExam = async (id) => {
    try {

        const query = `
        SELECT 
            t.outpatient_ID AS patient_ID, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name,
            u.fname || ' ' || u.mname || ' ' || u.lname AS dependent_name,
            u.phone_number AS dependent_phone_number,
            t.diagnosis AS diagnosis,
            TO_CHAR(t.examination_date, 'DD/MM/YYYY') AS examnination_date,
            TO_CHAR(t.next_examination, 'DD/MM/YYYY') AS next_examnination,
            t."Fee(VND)" AS "Fee(VND)"
        FROM 
            examination t
        JOIN 
            patient s ON t.outpatient_ID = s.patient_ID
        JOIN
            employee r ON t.doctor_ID = r.employee_ID
        JOIN
            dependent u ON u.patient_ID = s.patient_ID
        WHERE 
            t.doctor_id = $1
        ORDER BY 
            t.outpatient_ID;  
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const gettreat = async (id) => {
    try {

        const query = `
        SELECT 
            t.inpatient_ID AS patient_ID, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name,
            u.fname || ' ' || u.mname || ' ' || u.lname AS dependent_name,
            u.phone_number AS dependent_phone_number,
            TO_CHAR(t.admission_date, 'DD/MM/YYYY') AS admission_date,
            TO_CHAR(t.discharge_date, 'DD/MM/YYYY') AS discharge_date,
            t.result AS "result"
        FROM 
            treatment t
        JOIN 
            patient s ON t.inpatient_ID = s.patient_ID
        JOIN
            employee r ON t.doctor_ID = r.employee_ID
        JOIN
            dependent u ON u.patient_ID = s.patient_ID
        WHERE 
            t.doctor_id = $1
        ORDER BY 
            t.inpatient_ID;
        `;
        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}


const getSpecial = async (id) => {
    try {
        const query = `
        SELECT 
            t.specialty  
        FROM 
            specialties t
        WHERE 
            t.doctor_id = $1;
        `;
        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}





module.exports = {
    getDoctorbyID,
    getMyinfo,
    getworkplace,
    getExam,
    gettreat,
    getSpecial
};
