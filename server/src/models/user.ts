import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        salt: { type: String },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    let salt = await bcrypt.genSalt();
    let hashedString = await bcrypt.hash(this.password, salt);
    this.salt = salt;
    this.password = hashedString;
});

const userModel = mongoose.model("user", userSchema);
export { userModel };
