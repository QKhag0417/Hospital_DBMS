
const {getPa} = require('../models/receptionist');
const {getAss} = require('../models/receptionist');
const {getExam} = require('../models/receptionist');
const {gettreat} = require('../models/receptionist');
const {getcare} = require('../models/receptionist');
const {getmed} = require('../models/receptionist');
const {getbi} = require('../models/receptionist');
const {getwork} = require('../models/receptionist');
const {getspecial} = require('../models/receptionist');


const getPatient = async(req, res, next) => {

    try {
        result = await getPa();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        console.log(result)
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getAssignment = async(req, res, next) => {

    try {


        result = await getAss();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getExamination = async(req, res, next) => {

    try {


        result = await getExam();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const gettreatment = async(req, res, next) => {

    try {

 
        result = await gettreat();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getcaretaking = async(req, res, next) => {

    try {


        result = await getcare();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmedication = async(req, res, next) => {

    try {


        result = await getmed();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getBill = async(req, res, next) => {

    try {


        result = await getbi();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getWork = async(req, res, next) => {

    try {


        result = await getwork();
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }


  const getSpecialty = async(req, res, next) => {

    try {


        result = await getspecial()
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }



module.exports = {
    getPatient,
    getAssignment,
    getExamination,
    gettreatment,
    getcaretaking,
    getmedication,
    getBill,
    getWork,
    getSpecialty
};