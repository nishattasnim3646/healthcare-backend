import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();

// Middleware and routes can be added here
config({path: "./config/config.env"});

// middleware for frontend and backend communication
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

export default app;