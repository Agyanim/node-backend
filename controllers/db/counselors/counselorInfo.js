const CounselorInfo = require("../../../model/counselors/counselorInfo");

const insertIntoCounselorInfo = async () => {
  await CounselorInfo.create({
    fName: "Robert ",
    lName: "Lamptey",
    dob: "19/12/1986",
    telephon: "0245789685",
  });
};






const display = async () => {
  try {
    const displayCounslorInfo = await CounselorInfo.find({});

    console.log(displayCounslorInfo);
  } catch (error) {}
};

module.exports = { insertIntoCounselorInfo, display };
