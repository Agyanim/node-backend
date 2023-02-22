const CounselorInfo=require("../model/counselors/counselorInfo.js")
let { emailNotification } = require("../data");
//this handles that get request 
const getEmail = async (req, res) => {
const displayCounslorInfo=await CounselorInfo.find({})
  res.status(200).json({ success: true, data: displayCounslorInfo });
};
// This handles the post request
const sendEmail = (req, res) => {
  console.log("request successful");
  const data = req.body;
  console.log(data);
  emailNotification.push(data);
  res.status(200).json({ success: true, data: emailNotification });
};

// This handles the put request
const updateEmail = (req, res) => {
  console.log("request successful");
  const { id, email } = req.body;
  const findEmail = emailNotification.map((value) =>
    value.id === Number(id)
      ? (value = { id, email })
      : (value = { email: value.email, id: value.id })
  );
//   replacing the old data with the updated one.
  emailNotification = findEmail;

  console.log(emailNotification);
  res.status(200).json({ success: true, data: emailNotification });
};

module.exports = { getEmail, sendEmail, updateEmail };
