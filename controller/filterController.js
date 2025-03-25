import prisma from "../DB/db.config.js";

export const filter_user_for_attendance = async (req, res) => {
  const { selectedClass } = req.query;
  try {
    const students = await prisma.student.findMany({
      where: {
        class_id: Number(selectedClass),
      },
    });

    return res.json({
      status: 200,
      message: "Students for attendance",
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
