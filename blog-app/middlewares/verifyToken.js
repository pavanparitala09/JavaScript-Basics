import jwt from "jsonwebtoken";

export const verifyToken = (...allowedRoles) => {
  return async (req, res, next) => {
    try {

      // read token from request cookies
      let token = req.cookies?.token;

      if (!token) {
        return res.status(401).json({ message: "Unauthorized request. Please login." });
      }

      // verify token
      let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decodedToken)
      // check if role is allowed
      if (!allowedRoles.includes(decodedToken.role)) {
        return res.status(403).json({ message: "Forbidden. You are not allowed." });
      }

      // attach user info to request
      req.user = decodedToken;

      // move to next middleware
      next();

    } catch (err) {

      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Session expired. Please login again." });
      }

      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid token. Please login again." });
      }

      next(err);
    }
  };
};
