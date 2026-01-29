
const database = require('../database/database');

const addPatient = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const id = req.body.id;
    const fullName = req.body.name; 
    const age = req.body.age;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const height = req.body.height;
    const weight = req.body.weight;

    // Tách họ, tên đệm, và tên từ fullName
    const nameParts = fullName.trim().split(" ");
    const lname = nameParts.pop(); 
    const fname = nameParts.shift(); 
    const mname = nameParts.join(" ") || null; 

    const query = `
      INSERT INTO patient (patient_id, fname, mname, lname, age, gender, phone_number, "Height(m)", "Weight(kg)")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
    `;
    const values = [id, fname, mname, lname, age, gender, phone, height, weight];

    const result = await database.query(query, values);

    res.status(201).json({ message: "Thêm thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm bệnh nhân:", err);

    res.status(500).json({ message: "Thêm thất bại", error: err.message });
  }
};

const addAssignment = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const id = req.body.id;
    const room = req.body.room; 
    const department = req.body.department;
    const purpose = req.body.purpose;

    const query = `
      INSERT INTO assignment (patient_id, departmentname, roomnumber, purpose)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [id, department, room, purpose];

    const result = await database.query(query, values);

    res.status(201).json({ message: "Thêm thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm assignment:", err);

    res.status(500).json({ message: "Thêm thất bại", error: err.message });
  }
};

const addExamination = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const patientid = req.body.patientid;
    const doctorid = req.body.doctorid;
    const diagnosis = req.body.diagnosis;
    const examdate = req.body.examdate;
    const nextdate = req.body.nextdate;
    const fee = req.body.fee;

    const query = `
      INSERT INTO examination (outpatient_id, doctor_id, diagnosis, examination_date, next_examination, "Fee(VND)")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [patientid, doctorid, diagnosis, examdate, nextdate, fee];

    const result = await database.query(query, values);

    res.status(201).json({ message: "Thêm thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm examination:", err);

    res.status(500).json({ message: "Thêm thất bại", error: err.message });
  }
};


const addtreatment = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const patientid = req.body.patientid;
    const doctorid = req.body.doctorid;
    const admissiondate = req.body.admissiondate;
    const dischargedate = req.body.dischargedate;
    const result = req.body.result;

    const query = `
      INSERT INTO treatment (inpatient_id, doctor_id, admission_date, discharge_date, result)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [patientid, doctorid, admissiondate, dischargedate, result];

    const dbResult = await database.query(query, values);

    res.status(201).json({ message: "Thêm điều trị thành công", data: dbResult.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm điều trị:", err);

    res.status(500).json({ message: "Thêm điều trị thất bại", error: err.message });
  }
};

const addcaretaking = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const patientid = req.body.patientid;  
    const nurseid = req.body.nurseid;      

    const query = `
      INSERT INTO caretaking (patient_id, nurse_id)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const values = [patientid, nurseid];

    const result = await database.query(query, values);

    res.status(201).json({ message: "Thêm thông tin điều dưỡng thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm thông tin điều dưỡng:", err);

    res.status(500).json({ message: "Thêm thông tin điều dưỡng thất bại", error: err.message });
  }
};

const addmedication = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const medid = req.body.medid;  
    const medname = req.body.medname;  
    const price = req.body.price; 
    const effect = req.body.effect; 
    const date = req.body.date; 
    const patientid = req.body.patientid; 

    const query = `
      INSERT INTO medication (medication_id, medication_name, "Price(VND)", effect, expired_date, patient_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    const values = [medid, medname, price, effect, date, patientid];

    const result = await database.query(query, values);
    res.status(201).json({ message: "Thêm thuốc thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm thuốc:", err);

    res.status(500).json({ message: "Thêm thuốc thất bại", error: err.message });
  }
};

const addBill = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);
    const billid = req.body.billid;  
    const price = req.body.price; 
    const date = req.body.date; 
    const patientid = req.body.patientid;

    const query = `
      INSERT INTO bill (bill_id, "Total_price(VND)", date, customer_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [billid, price, date, patientid];

    const result = await database.query(query, values);

    res.status(201).json({ message: "Hóa đơn đã được thêm thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm hóa đơn:", err);

    res.status(500).json({ message: "Thêm hóa đơn thất bại", error: err.message });
  }
};

const addWork = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const id = req.body.id;  
    const work = req.body.work; 

    const query = `
      INSERT INTO working_place (employee_id, departmentname)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [id, work];

    const result = await database.query(query, values);

    res.status(201).json({ message: "Công việc đã được thêm thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm công việc:", err);

    res.status(500).json({ message: "Thêm công việc thất bại", error: err.message });
  }
};


const addSpecialty = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const id = req.body.id;  
    const special = req.body.special;  
    const query = `
      INSERT INTO specialties (doctor_id, specialty)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const values = [id, special];

    const result = await database.query(query, values);
    res.status(201).json({ message: "Chuyên khoa đã được thêm thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi thêm chuyên khoa:", err);

    res.status(500).json({ message: "Thêm chuyên khoa thất bại", error: err.message });
  }
};



module.exports = {
    addPatient,
    addAssignment,
    addExamination,
    addtreatment,
    addcaretaking,
    addmedication,
    addBill,
    addWork,
    addSpecialty
};