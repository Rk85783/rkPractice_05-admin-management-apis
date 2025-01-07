import User from "../models/User.js";

export const getUsersList = async (req, res) => {
	try {
        const totalCounts = await User.countDocuments();
		const usersList = await User.find().select('-password').sort({ createdAt: -1 });
		res.json({ message: "Users list fetched!", data: { totalCounts, usersList } });
	} catch (error) {
		console.log("getUsersList(): catch error: %o", error);
		res.json({ error: error.messages || "Something went wrong!" });
	}
};

export const getUserDetails = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findById(userId).select('-password');
		if (!user) {
			return res.json({ message: "User not found!" });
		}
		res.json({ message: "User details fetched!", data: user });
	} catch (error) {
		console.log("getUserDetails(): catch error: %o", error);
		res.json({ error: error.messages || "Something went wrong!" });
	}
};

export const updateUserDetails = async (req, res) => {
	try {
		const { userId } = req.params;
		const user = await User.findByIdAndUpdate(userId, req.body, { new: true }).select('-password');
		if (!user) {
			return res.json({ message: "User not found!" });
		}
		res.json({ message: "User details updated!", data: user });
	} catch (error) {
		console.log("updateUserDetails(): catch error: %o", error);
		res.json({ error: error.messages || "Something went wrong!" });
	}
};