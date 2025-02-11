import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
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
    res.status(201).json({ message: "Đăng kí thành công"});
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
    
    res
      .status(200)
      .json({ user, message: "Đăng nhập thành công" });
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

export const resetPassword = async (req, res) => {
  const { email,oldPass, newPass,comfirmPass } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch= await bcrypt.compare(oldPass,user.password);
    if(!isMatch){
      return res.status(400).json({ message: "Mật khẩu không chính xác" });
    }

    if (newPass !== comfirmPass) {
      return res.status(400).json({ message: "Mật khẩu mới và xác nhận không chùng khớp"});
    }

    const hashedPassword = await bcrypt.hash(newPass, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Đổi mật khẩu thành công" });
  } catch (error) {
    res.status(500).json({ message: "Error" });
    console.log(error);
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Đăng xuất thành công" });
};
