import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectDB from './db/database.js';
import { v2 as cloudinary } from 'cloudinary';
import { app, server } from './socket/socket.js';
import path from "path";
dotenv.config();
connectDB();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(express.json({ limit: "50mb" })); //To parse Json data in frontend
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/message', messageRoutes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    // react app
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

server.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}`);
})