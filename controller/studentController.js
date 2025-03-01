import prisma from "../DB/db.config.js";

// insert student information in the db
export const createAStudent = async (req, res) => {
  const { user_id, session } = req.body;

  try {
    const newStudent = await prisma.student.create({
      data: {
        user_id,
        session,
      },
    });
    return res.json({
      status: 201,
      data: newStudent,
      message: "New student data uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// get all student information
export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    return res.json({
      status: 200,
      data: students,
      message: "Students fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
