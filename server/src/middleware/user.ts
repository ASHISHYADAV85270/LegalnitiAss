import express from 'express';
import { userModel } from '../models/user.ts';
import jwt from 'jsonwebtoken';
const secretKey: string = "atgwetwrw24@3Q3R2Q4trw";
async function checkauth(req: express.Request, res: express.Response) {
    const token = req.cookies?.token;
    if (!token) {
        return res.json({ success: false });
    }
    try {
        const decodedId = jwt.verify(token, secretKey);
        const user = await userModel.findById(decodedId);
        if (!user) {
            return res.json({ success: false });
        }
        return res.json({ success: true, user })
    } catch (error) {
        return res.json({ success: false });
    }
}
export { checkauth }