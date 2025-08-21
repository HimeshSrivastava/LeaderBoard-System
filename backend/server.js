import express from 'express'
import ConnectMongoose from './db/ConnectionMongoose.js';
import cors from "cors";
import express from "express";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://leader-board-system-nine.vercel.app",
  "https://leader-board-system-1vm5vr3u2-himeshsrivastavas-projects.vercel.app" // ✅ add your Vercel domain
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

import userRoutes from './routes/user.routes.js'
import historyRoutes from './routes/history.routes.js'

app.use('/',userRoutes)
app.use('/',historyRoutes)

app.listen(3000,()=>{
    ConnectMongoose();
    console.log('connected express server')
})