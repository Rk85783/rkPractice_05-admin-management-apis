import User from "../models/User.js";
import { verifyToken } from "../service/authService.js";

export const authenticate = async (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        token = token && token.split(' ')[1];
        if (!token) {
            return res.json({ error: "Token not found" });
        }
        req.decoded = verifyToken(token);
        next();
    } catch (error) {
        return res.json({ error: "Invalid token" });
    }
};

export const authorized = (...roles) => {
    return (req, res, next) => {
        try {
            if (!roles.includes(req.decoded.role)) {
                return res.json({ error: "User not authorized" });
            }
            next();
        } catch (error) {
            return res.json({ error: "Invalid token" });
        }
    }
};