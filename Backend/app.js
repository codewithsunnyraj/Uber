import express from "express";
import "dotenv/config";
import { connectDB } from "./db/db.js";
import cors from "cors";
import { userRoutes } from "./routes/user.routes.js";
const app = express();
app.use(cors());
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users",userRoutes)

app.get("/", (req, res) => {
  res.send("hello");
});

export default app;
