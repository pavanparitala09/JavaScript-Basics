import { UserTypeModel } from "../models/UserModel.js";

export const checkUser = async (req, res, next) => {
  //get user id
  let aid = req.body?.user || req.params?.id;
  //verify user
  console.log(req.params)
  let user = await UserTypeModel.findById(aid);
  //if user not found
  if (!user ) {
    return res.status(401).json({ message: "Invalid user" });
  }
  //if user found but role is different
  if(user.role!=='USER'){
    return res.status(403).json({ message: "User is not an user" });
  }
  //if user blocked
  if(!user.isActive){
     return res.status(403).json({ message: "User account is not active" });
  }
  //forward req to next
  next();
};
