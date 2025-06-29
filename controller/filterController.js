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

// filter for teacher
export const show_attendance_after_filter = async (req, res) => {
  const selectedClass = parseInt(req.query.selectedClass);

  try {
    const attendances = await prisma.attendance.findMany({
      where: selectedClass
        ? {
            class_id: selectedClass,
          }
        : {},
      include: {
        student: {
          include: {
            user: true,
          },
        },
        class: true,
      },
    });
    return res.json({
      status: 200,
      message: "all Students attendance",
      data: attendances,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// filter for student
export const show_filtered_attendance_by_date = async (req, res) => {
  const { startDate, endDate, email } = req.query;
  try {
    const attendances = await prisma.attendance.findMany({
      where: {
        AND: [
          {
            student: {
              user: {
                email: email,
              },
            },
          },
          {
            takingTime: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        ],
      },
      include: {
        student: {
          include: {
            user: true,
          },
        },
        class: true,
      },
    });
    return res.json({
      status: 200,
      message: "all attendance of that range",
      data: attendances,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
