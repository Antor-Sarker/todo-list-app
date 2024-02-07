import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AddTaskModal({
  modalMode,
  setModalMode,
  handelAddTask,
  handelEditTask,
}) {
  const [data, setData] = useState({
    id: modalMode === "add" ? crypto.randomUUID() : modalMode.id,
    name: modalMode === "add" ? '' : modalMode.name,
    isComplete: modalMode === "add" ? false : modalMode.isComplete,
    priority: modalMode === "add" ? '' : modalMode.priority,
  });
  function handelSubmit(e) {
    e.preventDefault();

    if(data.name===''){
      alert('input task name')
      return
    }
    if(data.priority===''){
      alert('select priority')
      return 
    }


    
    
    modalMode === "add" ? handelAddTask(data) : handelEditTask(data);
  }
  function handelOnChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className="p-8 absolute z-10 bg-slate-900 bg-opacity-100 top-28 left-1/2">
        <form onSubmit={handelSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handelOnChange}
              required
            />
          </div>
          <div>
            <select
              name="priority"
              id="priority"
              className="bg-black"
              defaultValue={data.Priority}
              onChange={handelOnChange}
              required
            >
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
            <button
              type="submit"
              className="bg-green-400"
              onClick={handelSubmit}
            >
              {modalMode === "add" ? "add" : "update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
