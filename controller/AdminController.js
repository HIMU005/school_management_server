import prisma from "../DB/db.config.js";

export const addBook = async (req, res) => {
  const bookData = req.body;
  try {
    const newBook = await prisma.subject.create({
      data: bookData,
    });
    return res.json({
      status: 201,
      data: newBook,
      message: "New book data uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
