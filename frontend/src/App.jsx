import { useState } from "react";
import UserSelect from "./components/UserSelect"
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import History from "./components/History";

function App() {
const [selectedUserId, setSelectedUserId] = useState("");

  return (
    <div className=" bg-amber-50">
      <h1 className="text-3xl text-center font-bold pb-8 pt-8  bg-amber-100">Leaderboard System</h1>
      <div className="md:flex ">
       <div className="flex flex-col h-screen justify-evenly">
       <UserSelect onUserSelect={setSelectedUserId} />
       {selectedUserId && <ClaimButton userId={selectedUserId} />}

       <div className="m-8">
        <h1 className="text-red-900 text-4xl mb-8">Top #3 </h1>
          <History/>
       </div>
       </div>
       <div className="mx-auto">
       <Leaderboard />
       </div>
      </div>
    </div>
  )
}

export default App
