import { UserTypeModel } from "../models/UserModel.js";

export const checkAdmin = async (req, res, next) => {
  //get author id
  let aid = req.body?.author || req.params?.authorId;
  //verify author
  let admin = await UserTypeModel.findById(aid);
  //if author not found
  if (!admin ) {
    return res.status(401).json({ message: "Invalid admin" });
  }
  //if author found but role is different
  if(admin.role!=='ADMIN'){
    return res.status(403).json({ message: "User is not an admin" });
  }

  //forward req to next
  next();
};
