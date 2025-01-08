import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
export const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "Hãy điền đầy đủ thông tin" });
  }
  const avatar = `https://avatar.iran.liara.run/username?username=${fullname}`;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ errEmail: "Email đã được đăng kí" });
  }
  if (password.length < 6) {
    return res.status(400).json({ errPassword: "Mật khẩu ít nhất 6 kí tự" });
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
  if (!email || !password) {
    return res.status(400).json({ message: "Hãy điền đầy đủ thông tin" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errEmail: "Email chưa được đăng kí" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ errPassword: "Sai mật khẩu" });
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
    });
    res.status(200).json({ user, message: "Đăng nhập thành công" });
    console.log(user);
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
    console.log(error);
  }
};

export const loginGoogle = async (req, res) => {
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const client = new OAuth2Client(client_id);

  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: client_id,
    });

    const payload = ticket.getPayload();
    let account = await User.findOne({ email: payload.email });

    if (!account) {
      account = await new User({
        fullname: payload.name,
        email: payload.email,
        avatar: payload.picture,
      }).save();
    }

    res.json({ success: true, user: payload });
  } catch (error) {
    res.status(401).json({ success: false, error: "Invalid token" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Đăng xuất thành công" });
};
