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
    name: modalMode === "add" ? "" : modalMode.name,
    isComplete: modalMode === "add" ? false : modalMode.isComplete,
    priority: modalMode === "add" ? "" : modalMode.priority,
  });
  function handelSubmit(e) {
    e.preventDefault();

    if (data.name === "") {
      alert("input task name");
      return;
    }
    if (data.priority === "") {
      alert("select priority");
      return;
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
      <div className="rounded p-8 absolute z-50 bg-gray-600 bg-opacity-100 top-32 left-1/2">
        <form onSubmit={handelSubmit}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              className="rounded bg-gray-800 p-2 focus: pl-5 focus: outline-none w-full"
              onChange={handelOnChange}
              required
            />
          </div>
          <div>
            <select
              name="priority"
              id="priority"
              className="mt-2 px-3 py-2 bg-[#2D323F] rounded-md cursor-pointer"
              defaultValue={data.priority}
              onChange={handelOnChange}
              required
            >
              <option value="">Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className=" flex justify-between mt-5">
            <button
              type="reset"
              className="bg-red-400 p-1 rounded"
              onClick={() => setModalMode(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-400 p-1 rounded"
              onClick={handelSubmit}
            >
              {modalMode === "add" ? "Add Task" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
