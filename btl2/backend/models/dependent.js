const database = require('../database/database');

const getDependentbyID = async (id) => {
    const idArray = id.split(' ');
    try {
        const result = await database.query('SELECT * FROM dependent WHERE patient_id = $1', [idArray[0]]);
        console.log(result.rows[0])
        return result.rows[0];

    } catch (err) {
        throw err;
    }
}

const getFamily = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.patient_id = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            t.patient_id,
            s.fname || ' ' || t.mname || ' ' || s.lname AS patient_name, 
            s.age AS patient_age,
            s.gender AS patient_gender,
            s.phone_number AS patient_phone_number,
            s."Height(m)" AS "patient_height(m)",
            s."Weight(kg)" AS "patient_weight(kg)"
        FROM
            dependent t
        JOIN 
            patient s ON t.patient_id = s.patient_id
        WHERE 
            ${conditions}
        `;

        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getFamilyAssignment = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.patient_id = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            s.patient_id,
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name, 
            t.roomnumber AS room,
            t.departmentname AS deparment,
            t.purpose AS purpose
        FROM
            assignment t
        JOIN 
            patient s ON t.patient_id = s.patient_id
        JOIN 
            dependent r ON r.patient_id = s.patient_id 
        WHERE 
            ${conditions}
        ORDER BY 
            s.patient_id;  
        `;

        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}


const getFamilyExamination = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.outpatient_id = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            s.patient_id, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name, 
            t.doctor_ID AS doctor_ID, 
            r.fname || ' ' || r.mname || ' ' || r.lname AS doctor_name,
            t.diagnosis AS diagnosis,
            TO_CHAR(t.examination_date, 'DD/MM/YYYY') AS examnination_date,
            TO_CHAR(t.next_examination, 'DD/MM/YYYY') AS next_examnination
        FROM
            examination t
        JOIN 
            patient s ON t.outpatient_ID = s.patient_ID
        JOIN 
            employee r ON t.doctor_ID = r.employee_ID
        JOIN 
            dependent x ON x.patient_id = s.patient_id 
        WHERE 
            ${conditions}
        ORDER BY 
            s.patient_id;  
        `;

        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getFamilytreatment = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.inpatient_id = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            s.patient_id, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name,
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
        JOIN
            dependent x ON x.patient_id = s.patient_id
        WHERE 
            ${conditions}
        ORDER BY 
            s.patient_id;
        `;
        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}


const getFamilycaretaking = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.inpatient_id = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            s.patient_id, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name,
            t.nurse_ID AS nurse_ID, 
            r.fname || ' ' || r.mname || ' ' || r.lname AS nurse_name
        FROM 
            care_taking t
        JOIN 
            patient s ON t.inpatient_ID = s.patient_ID
        JOIN
            employee r ON t.nurse_ID = r.employee_ID
        JOIN
            dependent x ON x.patient_id = s.patient_id
        WHERE 
            ${conditions}
        ORDER BY 
            s.patient_id;
        `;
        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getFamilymedication = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.patient_id = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            s.patient_id, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name,
            t.medication_ID AS medication_ID, 
            t.medication_name AS medication_name,
            t."Price(VND)" AS "Price(VND)",
            t.effect AS effect,
            TO_CHAR(t.expired_date, 'DD/MM/YYYY') AS expired_date
        FROM 
            medication t
        JOIN 
            patient s ON t.patient_ID = s.patient_ID
        JOIN
            dependent x ON x.patient_id = s.patient_id
        WHERE 
            ${conditions}
        ORDER BY 
            s.patient_id;
        `;
        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}

const getFamilybill = async (id) => {
    try {
        const idArray = id.split(' ');

        const conditions = idArray.map((_, index) => `t.customer_ID = $${index + 1}`).join(' OR ');

        const query = `
        SELECT 
            s.patient_id, 
            s.fname || ' ' || s.mname || ' ' || s.lname AS patient_name,
            t.bill_ID AS bill_ID, 
            TO_CHAR(t.date, 'DD/MM/YYYY') AS date,
            t."Total_price(VND)" AS "Total_price(VND)"
        FROM 
            bill t
        JOIN 
            patient s ON t.customer_ID = s.patient_ID
        JOIN
            dependent x ON x.patient_id = s.patient_id
        WHERE 
            ${conditions}
        ORDER BY 
            s.patient_id;
        `;
        const result = await database.query(query, idArray);
            
        return result.rows;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    getDependentbyID,
    getFamily,
    getFamilyAssignment,
    getFamilyExamination,
    getFamilytreatment,
    getFamilycaretaking,
    getFamilymedication,
    getFamilybill
};
