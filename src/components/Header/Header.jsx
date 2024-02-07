/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function Header({ setModalMode,taskListData, handelPriority, handelSearch}) {
  const [countComplete, setCountComplete]=useState(0)
  

  useEffect(()=>{
    let a=0;
    taskListData.forEach(task => {
      if(task.isComplete===true) a++;
    });
    setCountComplete(a)
  },[taskListData])

   
  return (
    <div className="">
      <div className="flex justify-center">
        <div>
          <input type="search" name="" id="" placeholder="Search Task" onChange={(e)=>handelSearch(e.target.value)}/>
        </div>
        <div className="bg-green-500 text-white">
          <button onClick={() => setModalMode("add")}>add Task</button>
        </div>
      </div>

      <div className="flex justify-center">
        <select name="" id="" className="bg-black" defaultValue={""} onChange={(e)=>handelPriority(e.target.value)}>
        <option value="" disabled>priority</option>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div>
          <p>
            Total: {taskListData.length}| Complete: {countComplete}
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Header;
