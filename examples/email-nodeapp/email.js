const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "disasteremailverifier@gmail.com",
    pass: "ljdjixvkpymupcqo",
  },
  logger: true,
  debug: true,
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

message = {
  from: "disasteremailverifier@gmail.com",
  to: "mkemp4@uiowa.edu",
  subject: "Subject",
  text: "Test Email",
};
console.log("sending mail");
transporter.sendMail(message, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
