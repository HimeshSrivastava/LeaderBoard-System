import express from 'express'
import { addUser, findUser, updateClaimimgPoint } from '../controller/user.controller.js';

const router=express.Router();

router.post("/claim/:userId",updateClaimimgPoint);
router.get("/users",findUser);
router.post("/users",addUser);

export default router;