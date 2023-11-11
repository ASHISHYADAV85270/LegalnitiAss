import jwt from "jsonwebtoken";
const secretKey: string = "atgwetwrw24@3Q3R2Q4trw";

function createToken(user: any) {
    const payload = {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
    };
    const token = jwt.sign(payload, secretKey);
    return token;
}
function validateToken(token: string) {
    if (!token) {
        return null;
    }
    return jwt.verify(token, secretKey);
}
export { validateToken, createToken };