import prisma from "../DB/db.config.js";

// insert student information in the db
export const createATeacher = async (req, res) => {
  const { user_id, position, passedFrom } = req.body;

  try {
    const newTeacher = await prisma.teacher.create({
      data: {
        user_id,
        position,
        passedFrom,
      },
    });
    return res.json({
      status: 201,
      data: newTeacher,
      message: "New teacher data uploaded successfully",
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
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await prisma.teacher.findMany();
    return res.json({
      status: 200,
      data: teachers,
      message: "Teacher fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
