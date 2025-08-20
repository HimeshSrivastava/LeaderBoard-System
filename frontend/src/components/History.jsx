import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { api } from '../constants/Api';

const History = () => {
       const [users, setUsers] =useState([]);

    const fetchLeaderboard =async ()=>{
        try {
            const res= await axios.get(`${api}/history`);
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
    <div className='flex gap-3'>
       {users.map((user, idx) => (
            <ui key={user._id} className="border-t bg-amber-300">
            <div className='flex flex-col '>
              <li className="p-2 text-amber-950 text-9xl font-semibold list-none">{user.totalPoints}</li>
              <li className="p-2 text-3xl list-none">{user.name}</li>
            </div>
            </ui>
          ))}
    </div>
  )
}

export default History
