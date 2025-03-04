import prisma from "../DB/db.config.js";

// post a class data
export const createAClass = async (req, res) => {
  const { name, teacher_id } = req.body;

  try {
    const newClass = await prisma.class.create({
      data: {
        name,
        teacher_id,
      },
    });
    return res.json({
      status: 201,
      data: newClass,
      message: "New class data uploaded to your database successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// get all class data
export const getAllClass = async (req, res) => {
  try {
    const classes = await prisma.class.findMany();
    return res.json({
      status: 200,
      data: classes,
      message: "All data fetched",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error while fetching all classinformation ",
      error: error.message,
    });
  }
};

// get a single class
export const getASingleClass = async (req, res) => {
  const { id } = req.params;

  const classId = parseInt(id, 10);
  if (isNaN(classId)) {
    return res.status(400).json({ error: "Invalid class ID" });
  }

  try {
    const singleClass = await prisma.class.findUnique({
      where: { id: classId },
    });
    if (singleClass) {
      return res.json({
        status: 200,
        message: "class fetched successfully",
        data: singleClass,
      });
    } else {
      return res.json({
        status: 404,
        message: "class don't exist in our database",
      });
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: `server errror try again latter error: ${error}`,
    });
  }
};
