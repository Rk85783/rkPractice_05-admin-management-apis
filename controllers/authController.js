import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
	try {
		const { email, password } = req.body;
		const hashPassword = bcrypt.hashSync(password, 10);
		const newUser = await User.create({
			email,
			password: hashPassword
		});
		res.json({ message: "Registration successfully!" });
	} catch (error) {
		console.log("register(): catch error: %o", error);
		res.json({ error: error.messages || "Something went wrong!" });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.json({ message: "User not found!" });
		}
		const isMatched = bcrypt.compareSync(password, user.password);
		if (!isMatched) {
			return res.json({ message: "Invalid credentials!" });
		}
		const token = null
		res.json({ message: "Registration successfully!", data: { token } });
	} catch (error) {
		console.log("register(): catch error: %o", error);
		res.json({ error: error.messages || "Something went wrong!" });
	}
};