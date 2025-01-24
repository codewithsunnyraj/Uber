import userModel from "../module/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";
export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log(req.body);

  const { firstName, lastName, email, password } = req.body;

  const hashPassword = await userModel.hashPassword(password);
  const user = createUser({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  console.log(token);
  res.status(201).json({ token, user });
};
