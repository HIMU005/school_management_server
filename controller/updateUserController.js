import prisma from "../DB/db.config.js";

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, dob, age, gender, phone, roleData, role, photoURL } = req.body;

  try {
    const updateUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        dob,
        age,
        gender,
        phone,
        photoURL,
      },
    });

    // update if role is STUDENT
    if (role === "STUDENT" && roleData && roleData?.id) {
      const { class_id, session, id: studentId } = roleData;
      const classId = Number(class_id);
      const updateStudent = await prisma.student.update({
        where: { id: studentId },
        data: {
          session,
          class_id: classId,
        },
      });
    }

    // update if role is TEACHER
    if (role === "TEACHER" && roleData && roleData?.id) {
      const { position, passedFrom, id: teacherId } = roleData;
      const updateTeacher = await prisma.teacher.update({
        where: { id: teacherId },
        data: {
          position,
          passedFrom,
        },
      });
    }

    return res.json({
      status: 200,
      message: "User resourse updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// age is number id is not
