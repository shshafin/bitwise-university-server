import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await studentService.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the student",
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudentIntoDB();

    res.status(200).json({
      success: true,
      message: "All students retrieved successfully",
      data: students,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving students",
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const student = await studentService.getSingleStudentByIdFromDB(studentId);

    res.status(200).json({
      success: true,
      message: "Student is retrieved successfully",
      data: student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving student",
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
