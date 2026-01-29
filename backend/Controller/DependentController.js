
const {getFamily} = require('../models/dependent');
const {getFamilyAssignment} = require('../models/dependent');
const {getFamilyExamination} = require('../models/dependent');
const {getFamilytreatment} = require('../models/dependent');
const {getFamilycaretaking} = require('../models/dependent');
const {getFamilymedication} = require('../models/dependent');
const {getFamilybill} = require('../models/dependent');

const getMyFamilyInfo = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamily(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getMyFamilyAssignment = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamilyAssignment(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getMyFamilyExamination = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamilyExamination(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getMyFamilytreatment = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamilytreatment(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getMyFamily_care_taking = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamilycaretaking(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getMyFamily_medication = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamilymedication(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getMyFamily_bill = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getFamilybill(id);
        
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
    getMyFamilyInfo,
    getMyFamilyAssignment,
    getMyFamilyExamination,
    getMyFamilytreatment,
    getMyFamily_care_taking,
    getMyFamily_medication,
    getMyFamily_bill
};