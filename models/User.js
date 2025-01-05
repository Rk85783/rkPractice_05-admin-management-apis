import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: String,
	lastName: String,
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
	}
}, {
	timestamps: true
});
const User = mongoose.model('User', userSchema);

export default User;