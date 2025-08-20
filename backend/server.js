import express from 'express'
import ConnectMongoose from './db/ConnectionMongoose.js';
import cors from "cors";
const app=express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://leader-board-system-nine.vercel.app/"
    ], 
    credentials: true,
  })
);

import userRoutes from './routes/user.routes.js'
import historyRoutes from './routes/history.routes.js'

app.use('/',userRoutes)
app.use('/',historyRoutes)

app.listen(3000,()=>{
    ConnectMongoose();
    console.log('connected express server')
})