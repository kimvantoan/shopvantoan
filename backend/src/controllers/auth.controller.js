import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { OAuth2Client } from "google-auth-library";
import CryptoJS from "crypto-js";
import { sendForgotPasswordEmail, sendOTPEmail } from "../utils/mailer.js";
import { generateOTP, verifyOTP } from "../utils/otp.js";
export const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  const avatar = `https://avatar.iran.liara.run/username?username=${fullname}`;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "Email đã được đăng kí" });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Mật khẩu ít nhất 6 kí tự" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      avatar,
    });
    await newUser.save();
    res.status(201).json({ message: "Đăng kí thành công" });
  } catch (error) {
    res.status(400).json({ message: "Error registering user" });
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res.status(400).json({ message: "Email chưa được đăng kí" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000,
      sameSite: "None",
    });
    delete user.password;

    res.status(200).json({ user, message: "Đăng nhập thành công" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
    console.log(error);
  }
};

export const loginGoogle = async (req, res) => {
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const client = new OAuth2Client(client_id);

  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: client_id,
    });

    const payload = ticket.getPayload();
    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = await new User({
        fullname: payload.name,
        email: payload.email,
        avatar: payload.picture,
      }).save();
    }
    const tokenLogin = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", tokenLogin, {
      httpOnly: true,
      secure: true,
      maxAge: 86400000,
      sameSite: "None",
    });
    res.json({ success: true, user: user });
  } catch (error) {
    res.status(401).json({ success: false, error: "Invalid token" });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email chưa được đăng kí" });
    }

    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });
    
    sendForgotPasswordEmail(email,resetToken);
    
    res.json({ message: "Hãy đến email để đổi mật khẩu" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  try {
    if (!token) {
      return res.status(400).json({
        message: "Hết thời gian đổi, mời bạn gửi lại đường dẫn tới email",
      });
    }
    const { password, comfirmPass } = req.body;
    if (password !== comfirmPass) {
      return res
        .status(400)
        .json({ message: "Mật khẩu xác thực không trùng khớp" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json({ message: "Đổi mật khẩu thành công" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Server error" });
  }
};

export const changePassword = async (req, res) => {
  const { email, oldPass, newPass, comfirmPass } = req.body;

  try {
    if (newPass !== comfirmPass) {
      return res
        .status(400)
        .json({ message: "Mật khẩu xác thực không trùng khớp" });
    }
    const user = await User.findOne({ email });

    const isPasswordValid = await bcrypt.compare(oldPass, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    const otp = generateOTP(process.env.SECRET_OTP);

    sendOTPEmail(email, otp);

    return res
      .status(200)
      .json({ status: "success", message: "Đã gửi mã OTP đến email của bạn" });
  } catch (error) {
    console.log(error);
  }
};

export const verify_OTP = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    const isValid = verifyOTP(process.env.SECRET_OTP, otp);

    if (!isValid) {
      return res.status(401).json({ message: "Sai OTP" });
    }

    const user = await User.findOne({ email });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.status(200).json({ message: "Đổi mật khẩu thành công" });
  } catch (error) {
    console.log(error);
  }
};
export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Đăng xuất thành công" });
};
