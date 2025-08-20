import { useEffect, useState } from "react"
import { api } from "../constants/Api";
import axios from "axios";

const Leaderboard =()=>{
    const [users, setUsers] =useState([]);

    const fetchLeaderboard =async ()=>{
        try {
            const res= await axios.get(`${api}/leaderboard`);
            setUsers(res.data);
        }catch (err) {
            console.error("Error fetching leaderboard",err);

        }
    }

    useEffect(() =>{
        fetchLeaderboard();

        const interval = setInterval(fetchLeaderboard,5000);
        return()=> clearInterval(interval);
    },[]);

    return (
   <div className="p-4 border rounded-lg shadow-lg bg-emerald-50 w-full md:w-[600px] mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">🏆 Leaderboard</h2>

      <table className="md:w-[580px] w-full text-left border-collapse">
        <thead>
          <tr className="bg-emerald-100">
            <th className="p-2">Rank</th>
            <th className="p-2">User</th>
            <th className="p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user._id} className="border-t">
              <td className="p-2 font-semibold">#{idx + 1}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;