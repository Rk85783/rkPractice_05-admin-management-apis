import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

const appName = process.env.APP_NAME;
const appPort = process.env.APP_PORT || 4001;

app.listen(appPort, () => {
	console.info(`${appName} is running at http://localhost:${appPort}`);
});