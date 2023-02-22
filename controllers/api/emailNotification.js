const CounselorInfo=require("../../model/counselors/counselorInfo.js")
let { emailNotification } = require("../../data");
//this handles that get request 
const getEmail = async (req, res) => {
// const displayCounslorInfo=await CounselorInfo.find({})
console.log("get request successful");
  await res.status(200).json({ success: true, data: {} });
};
// This handles the post request
const sendEmail =async (req, res) => {
  console.log("request successful");
  const data = await req.body;
  console.log(data);
  emailNotification.push(data);
  res.status(200).json({ success: true, data: emailNotification });
};

// This handles the put request
const updateEmail = async(req, res) => {
  console.log("request successful");
  const { id, email } = await req.body;
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
