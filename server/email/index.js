const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const express = require("express");

email_cache = {}


function verify_code(email, code){
	if(email in email_cache){
		if(email_cache[email] == code){
			return true;
		}
	}
	return false;
};


function send_verification(email){
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

	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < 8; i++ ) {
		    result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	console.log(result);

	email_cache[email] = result;

	message = {
	  from: "disasteremailverifier@gmail.com",
	  to: email,
	  subject: "Disaster Verification",
	  text: result,
	};
	console.log("sending mail");
	transporter.sendMail(message, (error, info) => {
		if (error) {
			console.log(error);
			return false;
		}
		console.log("Message sent: %s", info.messageId);
	});
	return true;
};


module.exports.send_verification = send_verification;
module.exports.verify_code = verify_code;
module.exports.email_cache = email_cache;
