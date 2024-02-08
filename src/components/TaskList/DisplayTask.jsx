/* eslint-disable react/prop-types */
export default function DisplayTask({
  task,
  handelComplete,
  handelDeleteTask,
  setModalMode,
}) {
  return (
    <>
      <li className="w-8/12 grid grid-cols-3 mx-4 sm:mx-10 md:mx-24 lg:mx-48 py-3 pl-20 bg-gray-800 rounded my-4">
        <div className="flex">
          <div className="pr-3 text-3xl sm:text-xl md:text-3xl lg:text-3xl">
            <label htmlFor="task">
              <input
                type="checkbox"
                name="task"
                defaultChecked={task.isComplete}
                onClick={() => handelComplete(task.id)}
                className="appearance-none checked:appearance-auto w-6 h-6 rounded border-blue-700 border-2 accent-slate-950"
              />
            </label>
          </div>

          <div
            className={`${
              task.isComplete && "line-through text-gray-400"
            } pt-1`}
          >
            {task.name}
          </div>
        </div>
        <div>
          <div
            className={`w-16 text-center rounded ${
              task.priority === "High"
                ? "bg-red-400"
                : task.priority === "Medium"
                ? "bg-yellow-400"
                : "bg-green-400"
            } mt-1`}
          >
            {task.priority}
          </div>
        </div>
        <div className="pt-1">
          <button
            className="text-red-500 text-xl pr-5"
            onClick={() => handelDeleteTask(task.id)}
          >
            Delete
          </button>

          <button
            className="text-blue-500 text-xl"
            onClick={() => setModalMode(task)}
          >
            Edit
          </button>
        </div>
      </li>
    </>
  );
}
