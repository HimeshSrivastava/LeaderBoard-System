import express from 'express'
import { updatingLeaderboard, updatingHistory } from '../controller/history.controller.js';

const router=express.Router();

router.get("/leaderboard",updatingLeaderboard);
router.get("/history",updatingHistory);

export default router;