import User from "../models/User.js";

export const profileDetails = async (req, res) => {
	try {
		const { userId } = req.decoded;
		const user = await User.findById(userId).select('-password');
		if (!user) {
			return res.json({ message: "User not found!" });
		}
		res.json({ message: "Profile details fetched!", data: { user } });
	} catch (error) {
		console.log("profileDetails(): catch error: %o", error);
		res.json({ error: error.messages || "Something went wrong!" });
	}
};