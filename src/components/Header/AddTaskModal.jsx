/* eslint-disable no-unused-vars */

import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AddTaskModal({modalMode, setModalMode, handelAddTask, handelEditTask}) {
  const [data, setData] = useState({
    id: modalMode==="add"? crypto.randomUUID(): modalMode.id,
    name: modalMode==="add"? "": modalMode.name,
    isComplete: modalMode==="add"? false: modalMode.isComplete,
    Priority: modalMode==="add"? "": modalMode.Priority, 
  });
  function handelSubmit(e) {
    e.preventDefault()
    modalMode==="add"? handelAddTask(data): handelEditTask(data)
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
            <input type="text" name="name" value={data.name} required  onChange={handelOnChange}/>
          </div>
          <div>
            <select name="priority" id="" className="bg-black" required defaultValue={data.Priority} onChange={handelOnChange}>
              <option value=""></option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
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
              {modalMode==="add"? "add" : "update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
