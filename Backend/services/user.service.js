import userModel from "../module/user.model.js";

export const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    if (!firstName || !email || !password) {
      throw new Error("All fields are required");
    }
    const user = userModel.create({
      fullname: {
        firstName,
        lastName,
      },
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
