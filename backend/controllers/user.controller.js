const userModel = require("../model/user.model");
const userService = require("../service/user.service");
const blacklistTokenModel = require("../model/blacklistToken.model");

//express validator
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { fullname, email, password } = req.body;
    
    const isUserAllreadyExist = await userModel.findOne({ email });

    if (isUserAllreadyExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
    });

    const token = userModel.generateAuthToken;
    res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

module.exports.loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email }).select("+password");
  // .select('+password') password ko bhi leke aana hai
  // kyu ki models me select false hai is liya is ka used ho rha h

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password!!" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password!!" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  return res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.status(200).json({ message: "Logged out" });
};
