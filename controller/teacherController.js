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

// get a single teacher information using user_id
export const getASingleTeacher = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const singleTeacher = await prisma.teacher.findUnique({
      where: { user_id: userId },
    });
    if (singleTeacher) {
      return res.json({
        status: 200,
        data: singleTeacher,
        message: "Information of a teacher fetched successfully",
      });
    } else {
      return res.json({
        status: 404,
        message: "No information have found for that user",
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: "Internal server Error!! Try after some time",
    });
  }
};

// Function to handle atendance posting
export const postAtendancce = async (req, res) => {
  console.log("hitted");
  const data = req.body;
  const now = new Date();
  // return error is no data is attached
  if (!Array.isArray(data) || data.length === 0) {
    return res.status(400).json({
      status: 400,
      message: "No attendance data provided.",
    });
  }
  try {
    const response = await prisma.attendance.createMany({
      data: data.map((entry) => ({ ...entry, takingTime: now })),
    });

    // return status if the attendance is taken
    return res.status(201).json({
      status: 201,
      message: "Attendance saved successfully.",
      count: response.count,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
