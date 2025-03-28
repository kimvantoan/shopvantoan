import jwt from "jsonwebtoken";
const authmiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "token invalid" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const adminmiddleware = (req, res, next) => {
  authmiddleware(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Bạn không phải admin" });
    }
  });
};

export { authmiddleware, adminmiddleware };
