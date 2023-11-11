import express from 'express';
import http from 'http';
import { config } from "dotenv";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { connectMongoDB } from "./connection";
// import router from './router';
import { userRouter } from './routes/user.ts';
// import mongoose from 'mongoose';
config({
    path: "./.env",
});
const app = express();
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dblink = process.env.dblink;
const PORT = process.env.PORT || 8080;
app.use(
    cors({
        origin: ["http://localhost:5173"], //jooo url iffsai excess krskta hai
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,  //iskoo true krna hota jis sai cookies dusrai url sai share kr skai
    })
);
connectMongoDB(dblink);

app.use('/user', userRouter);




const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});

// const MONGO_URL = ''; // DB URI
// mongoose.Promise = Promise;
// mongoose.connect(MONGO_URL);
// mongoose.connection.on('error', (error: Error) => console.log(error));
