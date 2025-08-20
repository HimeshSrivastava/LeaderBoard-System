import React, {useState} from 'react';
import axios from 'axios';
import { api } from '../constants/Api';

const ClaimButton = ({ userId }) => {
    const [lastClaim, setLastClaim]= useState(null);
    const [loading, setLoading] = useState(false);

    const handleClaim = async ()=>{
        if(!userId) return alert("Please select a user first!");

        setLoading(true);
        try {
           const res = await axios.post(`${api}/claim/${userId}`);
           
           setLastClaim(res.data.pointsClaimed);
        } catch (error) {
            console.error("Error claiming points", error);
            alert("Something went wrong while claiming points!");
        }
        setLoading(false);

    }
    return(
        <div className='p-4 border rounded-lg shadow-md bg-white w-full max-w-md mx-auto mt-4'>
        <button
         onClick={handleClaim}
         disabled={loading}
         className={`px-6 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
        >
        {loading ? "Claiming..." : "Claim Points"}
      </button>
        {lastClaim !== null && (
        <p className="mt-3 text-lg font-semibold text-green-700">
          🎉 You just claimed {lastClaim} points!
        </p>
      )}
    </div>
    )
}

export default ClaimButton;