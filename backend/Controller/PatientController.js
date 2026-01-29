
const {getInfo} = require('../models/patient');
const {getAssignment} = require('../models/patient');
const {getExamination} = require('../models/patient');
const {gettreatment} = require('../models/patient');
const {getcaretaking} = require('../models/patient');
const {getmedication} = require('../models/patient');
const {getbill} = require('../models/patient');

const getmyInfo = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getInfo(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmyAssignment = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getAssignment(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmyExamination = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getExamination(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmytreatment = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await gettreatment(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmycare_taking = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getcaretaking(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmymedication = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getmedication(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getmybill = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getbill(id);
        
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
    getmyInfo,
    getmyAssignment,
    getmyExamination,
    getmytreatment,
    getmycare_taking,
    getmymedication,
    getmybill
};