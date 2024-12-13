
const database = require('../database/database');

const deletePatient = async (req, res, next) => {
  try {
    console.log("Dữ liệu nhận từ client:", req.body);

    const id = req.body.patient_id;

    if (!id) {
      return res.status(400).json({ message: "ID không được để trống" });
    }

    const query = `
      DELETE FROM patient
      WHERE patient_id = $1
      RETURNING *;
    `;
    const result = await database.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy bệnh nhân với ID đã cho" });
    }

    res.status(200).json({ message: "Xóa thành công", data: result.rows[0] });
  } catch (err) {
    console.error("Lỗi khi xóa bệnh nhân:", err);

    res.status(500).json({ message: "Xóa thất bại", error: err.message });
  }
};

  const deleteAssignment = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const room = req.body.room;
      const department = req.body.department;
  
      if (!room || !department) {
        return res.status(400).json({ message: "Room và Department không được để trống" });
      }
  
      const query = `
        DELETE FROM assignment
        WHERE departmentname = $1 AND roomnumber = $2
        RETURNING *;
      `;

      const values = [department, room];
      const result = await database.query(query, values);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy bản ghi phù hợp để xóa" });
      }
  
      res.status(200).json({ message: "Xóa thành công", data: result.rows[0] });
    } catch (err) {
      console.error("Lỗi khi xóa assignment:", err);
  
      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
  }

  const deleteExamination = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const doctor_id = req.body.examdoctorId;
      const patient_id = req.body.exampatientId;
  
      if (!doctor_id || !patient_id) {
        return res.status(400).json({ message: "Doctor ID và Patient ID không được để trống" });
      }
  
      const query = `
        DELETE FROM examination
        WHERE outpatient_id = $1 AND doctor_id = $2
        RETURNING *;
      `;
  
      const values = [patient_id, doctor_id];
      const result = await database.query(query, values);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy bản ghi phù hợp để xóa" });
      }
      res.status(200).json({ message: "Xóa thành công", data: result.rows[0] });
    } catch (err) {
      console.error("Lỗi khi xóa examination:", err);
      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
  }

  const deletetreatment = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
      const doctor_id = req.body.treatdoctorId;
      const patient_id = req.body.treatpatientId;
  
      if (!doctor_id || !patient_id) {
        return res.status(400).json({ message: "Doctor ID và Patient ID không được để trống" });
      }
  
      const query = `
        DELETE FROM treatment
        WHERE inpatient_id = $1 AND doctor_id = $2
        RETURNING *;
      `;
  
      const values = [patient_id, doctor_id];
  

      const result = await database.query(query, values);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy bản ghi phù hợp để xóa" });
      }
      res.status(200).json({ message: "Xóa thành công", data: result.rows[0] });
    } catch (err) {
      console.error("Lỗi khi xóa treatment:", err);

      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
}

  

  const deletecaretaking = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const nurse_id = req.body.nurseId;
      const patient_id = req.body.carepatientId;
  
      if (!nurse_id || !patient_id) {
        return res.status(400).json({ message: "Nurse ID và Patient ID không được để trống" });
      }
      const query = `
        DELETE FROM care_taking
        WHERE inpatient_id = $1 AND nurse_id = $2
        RETURNING *;
      `;

      const values = [patient_id, nurse_id];
      const result = await database.query(query, values);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy bản ghi phù hợp để xóa" });
      }
  
      res.status(200).json({ message: "Xóa thành công", data: result.rows[0] });
    } catch (err) {
      console.error("Lỗi khi xóa care_taking:", err);

      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
  }

  const deletemedication = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const id = req.body.med_id;
  
      if (!id) {
        return res.status(400).json({ message: "Medication ID không được để trống" });
      }

      const query = `
        DELETE FROM medication
        WHERE medication_id = $1
        RETURNING *;
      `;

      const result = await database.query(query, [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy bản ghi phù hợp để xóa" });
      }

      res.status(200).json({ message: "Xóa thành công", data: result.rows[0] });
    } catch (err) {
      console.error("Lỗi khi xóa medication:", err);
      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
  }

  const deleteBill = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const id = req.body.bill_id;
  
      if (!id) {
        return res.status(400).json({ message: "Bill ID không được để trống" });
      }
  
      const query = `
        DELETE FROM bill
        WHERE bill_id = $1
        RETURNING *;
      `;
      const result = await database.query(query, [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy hóa đơn phù hợp để xóa" });
      }
      res.status(200).json({ message: "Xóa hóa đơn thành công", data: result.rows[0] });
    } catch (err) {
      console.error("Lỗi khi xóa hóa đơn:", err);

      res.status(500).json({ message: "Xóa thất bại", error: err.message });
    }
  }

  const deleteWork = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const doctor_id = req.body.deleteworkdoctor;
      const department = req.body.deleteworkdepartment;
  
      if (!doctor_id || !department) {
        return res.status(400).json({
          message: "Doctor ID và Department không được để trống",
        });
      }
  
      const query = `
        DELETE FROM working_place
        WHERE employee_id = $1 AND departmentname = $2
        RETURNING *;
      `;
  
      const result = await database.query(query, [doctor_id, department]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({
          message: "Không tìm thấy bản ghi phù hợp để xóa",
        });
      }
  
      res.status(200).json({
        message: "Xóa bản ghi thành công",
        data: result.rows[0],
      });
    } catch (err) {
      console.error("Lỗi khi xóa bản ghi:", err);
  
      res.status(500).json({
        message: "Xóa thất bại",
        error: err.message,
      });
    }
  }


  const deleteSpecialty = async(req, res, next) => {
    try {
      console.log("Dữ liệu nhận từ client:", req.body);
  
      const doctor_id = req.body.specdoctorid;
      const specialty = req.body.specspecialty; 
  

      if (!doctor_id || !specialty) {
        return res.status(400).json({
          message: "Doctor ID và Specialty không được để trống",
        });
      }
  
      const query = `
        DELETE FROM specialties
        WHERE doctor_id = $1 AND specialty = $2
        RETURNING *;
      `;
  
      const result = await database.query(query, [doctor_id, specialty]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({
          message: "Không tìm thấy bản ghi phù hợp để xóa",
        });
      }
  
      res.status(200).json({
        message: "Xóa bản ghi thành công",
        data: result.rows[0],
      });
    } catch (err) {
      console.error("Lỗi khi xóa bản ghi:", err);
  
      res.status(500).json({
        message: "Xóa thất bại",
        error: err.message,
      });
    }
  }



module.exports = {
    deletePatient,
    deleteAssignment,
    deleteExamination,
    deletetreatment,
    deletecaretaking,
    deletemedication,
    deleteBill,
    deleteWork,
    deleteSpecialty
};