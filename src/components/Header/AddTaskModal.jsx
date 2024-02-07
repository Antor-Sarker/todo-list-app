/* eslint-disable no-unused-vars */

import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AddTaskModal({ setModalMode, handelAddTask }) {
  const [data, setData] = useState({
    id: crypto.randomUUID(),
    name: "",
    isComplete: false,
    Priority: "",
  });
  function handelSubmit(e) {
    e.preventDefault()
    handelAddTask(data)
  }
  function handelOnChange(e){
    setData({
        ...data,
        [e.target.name] : e.target.value,
    })
    
  }

  return (
    <>
      <div className="p-8 absolute z-10 bg-slate-900 bg-opacity-100 top-28 left-1/2">
        <form onSubmit={handelSubmit}>
          <div>
            <input type="text" name="name" id="" required  onChange={handelOnChange}/>
          </div>
          <div>
            <select name="priority" id="" className="bg-black" required onChange={handelOnChange}>
              <option value=""></option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className=" flex justify-between">
            <button
              type="reset"
              className="bg-red-400"
              onClick={() => setModalMode(false)}
            >
              cancel
            </button>
            <button type="submit" className="bg-green-400" onClick={handelSubmit}>
              add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
