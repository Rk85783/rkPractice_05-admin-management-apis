import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	isActive: {
		type: Boolean,
		default: true
	},
	userType: {
		type: String,
		enum: ["admin", "user"],
		default: "user"
	},
	firstName: String,
	lastName: String,
	dateOfBirth: Date,
	age: Number,
	gender: {
		type: String,
		enum: ["Male", "Female"]
	},
	hobbies: [String]
}, {
	timestamps: true
});
const User = mongoose.model('User', userSchema);

export default User;