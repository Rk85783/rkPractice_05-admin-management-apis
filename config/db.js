import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("connectDB(): Database connection successfully");
	} catch (error) {
		console.log("connectDB(): Database connection error", error);
	}
};
export default connectDB;