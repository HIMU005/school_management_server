import "dotenv/config";
import express from "express";
import routers from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("School management system is running perfectly");
});

// use router here
app.use(routers);

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
