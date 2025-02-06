import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB = async (student: TStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentIntoDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentByIdFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentIntoDB,
  getSingleStudentByIdFromDB,
};
