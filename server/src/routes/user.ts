import express from 'express';
import { handleUserSignUp, handleUserLogin, logoutUserHandler } from '../controllers/user.ts';
import { checkauth } from '../middleware/user.ts'
const userRouter = express.Router();
userRouter.get("/", checkauth);
userRouter.post('/', handleUserSignUp);
userRouter.post('/login', handleUserLogin);
userRouter.post('/logout', logoutUserHandler);

export { userRouter } 