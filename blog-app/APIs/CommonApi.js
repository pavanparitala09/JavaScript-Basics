import exp from "express";
import { authenticate } from "../services/authService.js";
import { UserTypeModel } from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const commonRoute = exp.Router();

//login
commonRoute.post("/authenticate", async (req, res) => {
  //get user cred object
  let userCred = req.body;
  //call authenticate service
  let { token, user } = await authenticate(userCred);
  //save tokan as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });
  //send res
  res.status(200).json({ message: "login success", payload: user });
});

//logout for User, Author and Admin
commonRoute.get("/logout", (req, res) => {
  // Clear the cookie named 'token'
  res.clearCookie("token", {
    httpOnly: true, // Must match original  settings
    secure: false, // Must match original  settings
    sameSite: "lax", // Must match original  settings
  });

  res.status(200).json({ message: "Logged out successfully" });
});

//change password
commonRoute.post("/change-password", async (req, res) => {
  //get current password and new password
  let { email, currentPassword, newPassword } = req.body;

  //check user exist
  let dbUser = await UserTypeModel.findOne({ email });

  if (!dbUser) res.status(404).json({ message: "user does not exist" });

  //check current password with db Password
  const isMatch = await bcrypt.compare(currentPassword, dbUser.password);
  if (!isMatch) {
    res.status(401).json({ message: "Old password does not match" });
  }

  //change the old password
  let newHashPassword = await bcrypt.hash(dbUser.password, 10);

  //update the password in db
  let updatedPassword = await UserTypeModel.findByIdAndUpdate(dbUser._id, {
    $set: { password: newHashPassword },
  });

  //send res
  res.status(200).json({ message: "Password changed" });
});
