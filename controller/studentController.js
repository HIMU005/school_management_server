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

// get a single student information by id
export const getASingleStudent = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  try {
    const singleStudent = await prisma.student.findUnique({
      where: { user_id: userId },
    });
    if (singleStudent) {
      return res.json({
        status: 200,
        data: singleStudent,
        message: "Information of student fetched successfully",
      });
    } else {
      return res.json({
        status: 404,
        message: "No information for that user Id",
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: "Internal server Error!! Try after some time",
    });
  }
};
