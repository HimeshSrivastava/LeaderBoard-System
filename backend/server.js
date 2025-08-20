import express from 'express'
import ConnectMongoose from './db/ConnectionMongoose.js';
import cors from "cors";
const app=express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://leader-board-system-nine.vercel.app"
    ], 
    credentials: true,
  })
);
app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||                                   
        allowedOrigins.includes(origin) ||           
        /\.vercel\.app$/.test(origin)                
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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