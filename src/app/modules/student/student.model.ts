import { Schema, model } from "mongoose";

import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentName,
} from "./student.interface";

const studentNameSchema = new Schema<TStudentName>({
  firstName: {
    type: "String",
    trim: true,
    required: [true, "First name is required"],
    maxlength: [20, "First name can not be more than 20 characters"],
  },
  middleName: { type: "String", trim: true },
  lastName: {
    type: "String",
    trim: true,
    required: [true, "Last name is required"],
  },
});

const guardianNameSchema = new Schema<TGuardian>({
  fatherName: {
    type: "String",
    trim: true,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: "String",
    trim: true,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: "String",
    trim: true,
    required: [true, "Father's contact number is required"],
  },
  motherName: {
    type: "String",
    trim: true,
    required: [true, "Mother's name is required"],
  },
  motherOccupation: {
    type: "String",
    trim: true,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: "String",
    trim: true,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianNameSchema = new Schema<TLocalGuardian>({
  name: {
    type: "String",
    trim: true,
    required: [true, "Local guardian's name is required"],
  },
  occupation: {
    type: "String",
    trim: true,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: "String",
    trim: true,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: "String",
    trim: true,
    required: [true, "Local guardian's address is required"],
  },
});

const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, "ID is required"],
      unique: true,
    },
    name: {
      type: studentNameSchema,
      required: [true, "Student name is required"],
    },
    gender: {
      type: "String",
      trim: true,
      enum: {
        values: ["female", "male", "other"],
        message: "{VALUE} is not a valid gender",
      },
      required: [true, "Gender is required"],
    },
    dateOfBirth: { type: "Date", trim: true },
    email: {
      type: "String",
      trim: true,
      required: [true, "Email is required"],
      unique: true,
    },
    contactNo: {
      type: "String",
      trim: true,
      unique: true,
      required: [true, "Contact number is required"],
    },
    emergencyContactNo: {
      type: "String",
      trim: true,
      required: [true, "Emergency contact number is required"],
    },
    bloodGroup: {
      type: "String",
      trim: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: {
      type: "String",
      trim: true,
      required: [true, "Present address is required"],
    },
    permanentAddress: {
      type: "String",
      trim: true,
      required: [true, "Permanent address is required"],
    },
    guardian: guardianNameSchema,
    localGuardian: localGuardianNameSchema,
    profileImg: { type: "String", trim: true },

    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

export const Student = model<TStudent>("Student", studentSchema);
