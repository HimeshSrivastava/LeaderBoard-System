import mongoose from "mongoose";


const historySchema= new mongoose.Schema({
   userId: mongoose.Schema.Types.ObjectId,
   ponitsClaimed: Number,
   createdAt:{type:Date, default: Date.now }

});

const History=mongoose.model('History',historySchema);
export default History;