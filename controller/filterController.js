export const filter_user_for_attendance = async (req, res) => {
  const { selectedClass } = req.query;
  console.log(selectedClass);

  return res.json({
    status: 200,
    message: `Filter user for attendance for class ${selectedClass}`,
  });
};
