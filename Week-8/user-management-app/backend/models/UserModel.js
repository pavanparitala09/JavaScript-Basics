//create user schema with validation
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, " name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, "date of birth is required"],
    },

    mobileNumber: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    strict: "throw",
    versionKey: false,
  },
);

//create user model for user schema

export const userModel = new model("user", userSchema);
