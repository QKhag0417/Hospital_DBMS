
const database = require('../database/database');

const deletePatient = async(req, res, next) => {
  console.log("Dữ liệu nhận từ client:", req.body);

}

  const deleteAssignment = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }

  const deleteExamination = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }

  const deletetreatment = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }

  const deletecaretaking = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }

  const deletemedication = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }

  const deleteBill = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }

  const deleteWork = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

  }


  const deleteSpecialty = async(req, res, next) => {
    console.log("Dữ liệu nhận từ client:", req.body);

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