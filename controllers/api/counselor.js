const {
  insertIntoCounselorInfo,
  displayCounselors,
} = require("../db/counselors/counselorInfo.js");

const getCounselor = async (req, res) => {
  try {
    const data = await displayCounselors();
    if (data) { 
      res.status(200).json({ Success: true, data });
    }
  } catch (error) {
    console.log(error);
  }
};

const sendCounselor = async (req, res) => {
  try {
    const data = await req.body;
    if (data) {
      await insertIntoCounselorInfo(data);
      res.status(200).json({ Success: true, data });
    } else {
      console.log("data can not be found");
    }
  } catch (error) {
    console.log(error);
  }
};
const updateCounselor = async (req, res) => {
  try {
    res.status(200).json({ Success: true, data: {} });
  } catch (error) {
    console.log(error);
  }
};
const deleteCounselor = async (req, res) => {
  try {
    res.status(200).json({ Success: true, data: {} });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCounselor,
  sendCounselor,
  updateCounselor,
  deleteCounselor,
};
