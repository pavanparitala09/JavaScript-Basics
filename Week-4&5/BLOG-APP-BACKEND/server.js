import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { userRoute } from "./APIs/UserApi.js";
import { adminRoute } from "./APIs/AdminApi.js";
import { authorRoute } from "./APIs/AuthorApi.js";
import { commonRoute } from "./APIs/CommonApi.js";
import cors from "cors";

config(); // to process .env
const app = exp();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5174",
    credentials: true,
  }),
);

//connect db
const connectdb = async () => {
  try {
    //connect to db
    await connect(process.env.DB_URL);
    console.log("db connected");
    //assign port and start server
    app.listen(process.env.PORT, () => {
      console.log("Server is running on", process.env.PORT);
    });
  } catch (err) {
    console.log("error occured during db connection :", err);
  }
};

//call the function
connectdb();

//body parser middleware
app.use(exp.json());

//add cookie parser
app.use(cookieParser());

//api routes
app.use("/user-api", userRoute);
app.use("/author-api", authorRoute);
app.use("/admin-api", adminRoute);
app.use("/common-api", commonRoute);

//for unknown path
app.use((req, res, next) => {
  res.status(404).send({ message: `${req.url} is invalid path` });
});

//error handeling middleware
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Full error:", err);

  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // mongoose cast error
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue =
    err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}"already exists`,
    });
  }

  // ✅ HANDLE CUSTOM ERRORS
  if (err.status) {
    return res.status(err.status).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // default server error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});
