import prisma from "../DB/db.config.js";

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, dob, age, gender, phone, roleData, role } = req.body;

  console.log("hitted the api");
  try {
    const updateUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name,
        dob,
        age,
        gender,
        phone,
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
