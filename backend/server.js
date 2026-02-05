import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import toolRoutes from "./routes/toolRoutes.js";
import clickRoutes from "./routes/clickRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Raspberry Pi API" });
});

app.use("/api/tools", toolRoutes);
app.use("/api/click", clickRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
