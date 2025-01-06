import jwt from "jsonwebtoken";
import { jwtAccessTokenExpireTime, jwtSecretKey } from "../config/appConfig.js";

export const generateToken = (user) => {
	return jwt.sign(
		{
			userId: user._id,
			email: user.email,
			role: user.userType
		},
		jwtSecretKey,
		{
			expiresIn: jwtAccessTokenExpireTime
		}
	);
};

export const verifyToken = (token) => {
	return jwt.verify(token, jwtSecretKey);
};

