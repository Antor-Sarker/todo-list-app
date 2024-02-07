/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function Header({ setModalMode,taskListData }) {
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
          <input type="search" name="" id="" placeholder="Search Task" />
        </div>
        <div className="bg-green-500 text-white">
          <button onClick={() => setModalMode("add")}>add Task</button>
        </div>
      </div>

      <div className="flex justify-center">
        <select name="" id="" className="bg-black">
          <option value="high">High</option>
          <option value="medium">Medium</option>
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
