import { useState, useEffect } from "react";
import { api } from "../constants/Api";
import axios from "axios";

const UserSelect = ({ onUserSelect }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [newUser, setNewUser] = useState("");

    useEffect(() =>{
        fetchUsers();
    },[]);

    const fetchUsers = async () => {
        try {
            const res=await axios.get(`${api}/users`);
            setUsers(res.data);
        } catch (error) {
            console.error("Error fetching users",error);
        }
    };
    
    const handleSelectChange = (e) => {
    setSelectedUser(e.target.value);
    onUserSelect(e.target.value); 
    };

    const handleAddUser = async () => {
        if (!newUser.trim()) return;
        try {
            const res= await axios.post(`${api}/users`,{
                name:newUser,
            });
            setUsers([...users, res.data]);
            setNewUser("");

        } catch (error) {
             console.error("Error adding user", error);
        }
    }
    return(
       <div className="p-4 border rounded-lg shadow-md bg-fuchsia-50 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Select User</h2>
     
     <select
      value={selectedUser}
      onChange={handleSelectChange}
      className="w-full p-2 border rounded mb-3"
    >
        <option value="">-- Select a User --</option>
        {users?.map((user) => (
          <option key={user?._id} value={user?._id}>
            {user?.name}
          </option>
        ))}
    </select>
    <div className="flex gap-2">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAddUser}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
    )

}

export default UserSelect; 