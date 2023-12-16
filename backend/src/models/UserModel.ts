import mongoose from "mongoose";

export const RefreshTokenSchema = new mongoose.Schema({
    refreshToken: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "please fill the fullName"]
    },
    email: {
        type: String,
        required: [true, "please fill the password"]
    },
    password: {
        type: String,
        required: [true, "please fill the password"]
    },
    role: {
        type: String,
        enum: ["superadmin", "syndic"],
        default: "syndic"
    },
    refresh_tokens: {
        type: [RefreshTokenSchema],
        default: []
    }
});

const User = mongoose.model("user", UserSchema);

export default User;
