const database = require('../database/database');

const getPatientbyID= async (id) => {

    try {
        const [result] = await database.query('SELECT * FROM patient WHERE patient_id = ?', [id]);

        return result;

    } catch (err) {
        throw err;
    }
}

const getInfo = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.patient_id, 
            t.fname || ' ' || t.mname || ' ' || t.lname AS patient_name,
            t.age AS patient_age,
            t.gender AS patient_gender,
            t.phone_number AS patient_phone_number,
            t."Height(m)" AS "patient_height(m)",
            t."Weight(kg)" AS "patient_weight(kg)",
            s.fname || ' ' || s.mname || ' ' || s.lname AS dependent_name,
            s.phone_number AS dependent_phone_number
        FROM 
            patient t
        JOIN 
            dependent s ON t.patient_id = s.patient_id
        WHERE 
            t.patient_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getAssignment = async (id) => {
    try {
    
        const query = `
            SELECT 
                t.roomnumber AS room, 
                t.departmentname AS deparment,
                t.purpose AS purpose
            FROM 
                assignment t
            JOIN 
                patient s ON t.patient_id = s.patient_id
            WHERE 
                t.patient_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getExamination = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.doctor_ID AS doctor_ID, 
            r.fname || ' ' || r.mname || ' ' || r.lname AS doctor_name,
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
        WHERE 
            t.outpatient_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const gettreatment = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.doctor_ID AS doctor_ID, 
            r.fname || ' ' || r.mname || ' ' || r.lname AS doctor_name,
            TO_CHAR(t.admission_date, 'DD/MM/YYYY') AS admission_date,
            TO_CHAR(t.discharge_date, 'DD/MM/YYYY') AS discharge_date,
            t.result AS result
        FROM 
            treatment t
        JOIN 
            patient s ON t.inpatient_ID = s.patient_ID
        JOIN
            employee r ON t.doctor_ID = r.employee_ID
        WHERE 
            t.inpatient_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getcaretaking = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.nurse_ID AS nurse_ID, 
            r.fname || ' ' || r.mname || ' ' || r.lname AS nurse_name
        FROM 
            care_taking t
        JOIN 
            patient s ON t.inpatient_ID = s.patient_ID
        JOIN
            employee r ON t.nurse_ID = r.employee_ID
        WHERE 
            t.inpatient_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getmedication = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.medication_ID AS medication_ID, 
            t.medication_name AS medication_name,
            t."Price(VND)" AS "Price(VND)",
            t.effect AS effect,
            TO_CHAR(t.expired_date, 'DD/MM/YYYY') AS expired_date
        FROM 
            medication t
        JOIN 
            patient s ON t.patient_ID = s.patient_ID
        WHERE 
            t.patient_id = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getbill = async (id) => {
    try {
    
        const query = `
        SELECT 
            t.bill_ID AS bill_ID, 
            TO_CHAR(t.date, 'DD/MM/YYYY') AS date,
            t."Total_price(VND)" AS "Total_price(VND)"
            
        FROM 
            bill t
        JOIN 
            patient s ON t.customer_ID = s.patient_ID
        WHERE 
        t.customer_ID = $1;
        `;

        const result = await database.query(query, [id]);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}



module.exports = {
    getPatientbyID,
    getInfo,
    getAssignment,
    getExamination,
    gettreatment,
    getcaretaking,
    getmedication,
    getbill
};