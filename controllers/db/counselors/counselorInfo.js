const CounselorInfo = require("../../../model/counselors/counselorInfo");

const insertIntoCounselorInfo = async (data) => {
  await CounselorInfo.create({
    fName: data.fName,
    lName: data.lName,
    gender: data.gender,
    dob: new Date(data.dob),
    location: data.location,
    telephone: data.telephone,
  });
};

const displayCounselors = async () => {
  try {
    const displayCounslorInfo = await CounselorInfo.find({});
    // console.log(displayCounslorInfo);
    return displayCounslorInfo;
  } catch (error) {}
};

module.exports = { insertIntoCounselorInfo, displayCounselors };
