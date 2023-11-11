import express from "express";
import { userModel } from "../models/user.ts";
import bcrypt from "bcrypt";
import { createToken } from "../utils/auth.ts";
async function handleUserSignUp(req: express.Request, res: express.Response) {
    const { fullName, email, password } = req?.body;
    if (fullName == "" || email == "" || password == "") {
        return res.json({
            message: "Please enter all the fields",
            success: false,
        });
    }
    try {
        let user = await userModel.findOne({ email });
        if (user) {
            return res.json({
                message: "Email Already Present",
                success: false,
            });
        }
        user = await userModel.create({ fullName, email, password });
        const token = createToken(user);
        user.salt = undefined;
        user.password = undefined;
        return res.cookie("token", token).json({
            message: "User Created Successfully",
            success: true,
            user: user,
        });
    } catch (error) {
        console.log(`error i am error from mongo`);
    }
}
async function handleUserLogin(req: express.Request, res: express.Response) {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                message: "Invalid Email or Password",
                success: false,
            });
        }
        const gen_hashedPassword = await bcrypt.hash(password, user.salt);
        if (gen_hashedPassword !== user.password) {
            return res.json({
                message: "Invalid Email or Password",
                success: false,
            });
        }
        const token = createToken(user);

        return res
            .cookie("token", token, {
                httpOnly: true, //it avoids using cookies from frontend
                maxAge: 60 * 60 * 1000,
                sameSite: "none", //koi bhi site excess kr skti hai
                secure: true, //necessary for sending cookie
            })
            .json({
                message: "Login Successful",
                success: true,
                user: user,
            });
    } catch (error) {
        return res.json({
            message: "Error from server side",
            success: false,
        });
    }
}
async function logoutUserHandler(req: express.Request, res: express.Response) {
    res.cookie("token", null, { maxAge: 0 });
    return res.json({ success: true, message: "Logout Successfully" });
}

export { handleUserSignUp, handleUserLogin, logoutUserHandler };
