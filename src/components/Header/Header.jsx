/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function Header({ setModalMode, tasks, handelPriority, handelSearch}) {
  const [countComplete, setCountComplete] = useState(0);

  useEffect(() => {
    let count = 0;
    tasks.forEach((task) => {
      if (task.isComplete === true) count++;
    });
    setCountComplete(count);
  }, [tasks]);

  return (
    <div className="">
      <div className="flex justify-evenly">
        <div className="text-gray-50">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Task"
            className="rounded bg-gray-800 p-2 focus: pl-5 focus: outline-none"
            onChange={(e) => handelSearch(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-blue-600 p-1 rounded" onClick={() => setModalMode("add")}>add Task</button>
        </div>
      </div>

      <div className="flex justify-evenly mt-8">
        <select
          name="priority"
          className="px-1 py-2 bg-[#2D323F] rounded-md cursor-pointer"
          defaultValue={""}
          onChange={(e) => handelPriority(e.target.value)}
        >
          <option value="" disabled>
            Select Priority
          </option>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div className="flex">
          <div className="text-amber-100 pr-10">Total: {tasks.length}</div>
          <div className="text-emerald-300">Complete: {countComplete}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
