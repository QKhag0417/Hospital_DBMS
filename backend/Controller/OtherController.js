
const {getMyinfo} = require('../models/other');
const {getworkplace} = require('../models/other');



const getOtherInfo = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getMyinfo(id);
        
        if (!result) {
            return res.status(400).send('User không tồn tại');
        }
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
  }

  const getWorkingPlace = async(req, res, next) => {

    try {
        const id = req.userInfo.ID, type = req.userInfo.type;

        if (id === undefined || type === undefined) {
            return res.status(404).send("Không có dữ liệu người dùng!");
        }
        result = await getworkplace(id);
        
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
    getOtherInfo,
    getWorkingPlace,
};