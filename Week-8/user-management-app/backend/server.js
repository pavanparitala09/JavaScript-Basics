import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { userRoute } from "./routes/UserApi.js";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = exp();
//bodyparser middle ware
app.use(exp.json());

config(); //to process env file

app.use(cors({ origin: ["http://localhost:5173"] }));

const port = process.env.PORT || 3000;
// const mongodbUrl ="mongodb://localhost:27017/user-management-app"

const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/user-management-app");
    console.log("Database connected");
    app.listen(port, (req, res) => {
      console.log("server running on", port);
    });
  } catch (err) {
    console.log(err.message);
  }
};

connectDB();

//rate limiting middle ware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);

app.use("/user-api", userRoute);



//for unknown path
app.use((req, res, next) => {
  res.status(404).send({ message: `${req.url} is invalid path` });
});

app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});
