import express from 'express';
import { handleUserSignUp, handleUserLogin, logoutUserHandler } from '../controllers/user.ts';
const userRouter = express.Router();
userRouter.get("/", (req: express.Request, res: express.Response) => { res.send("hiii ashish") });
userRouter.post('/', handleUserSignUp);
userRouter.post('/login', handleUserLogin);
userRouter.post('/logout', logoutUserHandler);

export { userRouter } 