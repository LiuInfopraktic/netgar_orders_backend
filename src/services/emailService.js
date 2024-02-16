const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth: {
      user: 'infopraktic@gmail.com',
      pass: "zyfp oulp ugbb dcuf",
    },
});
  
  
async function sendemail_action(insert, error) {
    // send mail with defined transport object
    try{
        const info = await transporter.sendMail({
        from: 'infopraktic@gmail.com',
        to: 'infopraktic@gmail.com',
        subject: "NETGAR BACKEND ERROR",
        text: `try: ${insert}\n catch: ${error}`,
        });
        return true
    } catch(e){console.log(e);return false}
}

module.exports = { sendemail_action }