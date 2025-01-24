import express from "express";
const router = express.Router();
import { registerUser } from "../controller/user.controller.js";
import { body } from "express-validator";
export const userRoutes = router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast three characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must me More than 6 Character"),
  ],
 
);

export default router;
