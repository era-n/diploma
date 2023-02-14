import * as nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to: string, html: string): Promise<void> {
  // create Nodemailer SES transporter
  const transporter = nodemailer.createTransport({
    port: 587,
    service: 'gmail',
    secure: true,
    auth: {
      user: 'nodemailer.mine@gmail.com',
      pass: 'ajyejxzwuypghind',
    },
    debug: true,
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: `"Discord Team" <nodemailer.mine@gmail.com>`, // sender address
    to: to, // list of receivers
    subject: 'Reset your password', // Subject line
    html,
  });
}
