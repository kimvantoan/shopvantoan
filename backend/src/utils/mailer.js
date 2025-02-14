import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function sendOTPEmail(email, otp) {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    headers: {
      "X-Mailbox-Owner": email,
    },
    subject: "Shopvantoan: Yêu cầu đổi mật khẩu",
    html: `
        <h1>Yêu cầu đổi mật khẩu</h1>
        <p>Tuyệt đối không được cung cấp mã OTP cho bất cứ ai</p>
        <p>Lưu ý: mã xác thực chỉ có thời hạn 2 phút</p>
        <h2>OTP: ${otp}</h2>
      `,
  });
}

export const sendForgotPasswordEmail = (email,resetToken) => {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    headers: {
      "X-Mailbox-Owner": email,
    },
    subject: "Shopvantoan: Yêu cầu đổi mật khẩu",
    html: `
      <h1>Yêu cầu đổi mật khẩu</h1>
      <p>Hãy nhấp vào đường dẫn bên dưới để đổi mật khẩu</p>
      <p>Bạn có 5 phút để tiến hành đổi mật khẩu</p>
      <a href="${process.env.CLIENT_URL}/reset-password/${resetToken}">Reset Password</a>
    `,
  });
};
