const nodemailer = require("nodemailer");

const sendAccessEmail = async (userEmail, userName, productName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  


  const mailOptions = {
    from: '"CareerGrid" <yourcareergridemail@gmail.com>',
    to: userEmail,
    subject: `✅ Access Granted: ${productName}`,
    html: `
      <h2>Hi ${userName},</h2>
      <p>🎉 Your access to <strong>${productName}</strong> has been activated!</p>
      <p>Enjoy your 1 month premium access.</p>
      <br/>
      <p>Regards,<br/>Team CareerGrid 🚀</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendAccessEmail;
