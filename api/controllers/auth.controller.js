import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashpassword = await bcrypt.hashSync(password, 10);
  const newUser = User({ username, email, password: hashpassword });

  // const Auth =
  try {
    await newUser.save();
    res.status(200).json("user created");
  } catch (e) {
    res.status(400).send(e);
  }
};
