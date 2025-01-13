import nodemailer from "nodemailer";
import { config } from "dotenv";

config();

const HOST_EMAIL = process.env.HOST_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PORT = process.env.SMTP_PORT;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});
export const sendVerificationcode = async (email, otp) => {
  try {
    const mailOptions = {
      from: HOST_EMAIL,
      to: email,
      subject: "Your Verification Code",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #333;">Verify Your Email</h2>
                    <p>Your verification code is:</p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h1 style="font-size: 32px; letter-spacing: 2px; color: #4CAF50; margin: 0; text-align: center;">
                            ${otp}
                        </h1>
                    </div>
                    <p style="color: #666;">This code will expire in 10 minutes.</p>
                    <p style="color: #999; font-size: 12px;">If you didn't request this code, please ignore this email.</p>
                </div>
            `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    console.error("Email Error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
