/* eslint-disable react/prop-types */

import DisplayTask from "./DisplayTask";

export default function TaskList({
  tasks,
  setModalMode,
  handelComplete,
  handelDeleteTask,
  filterChange,
  filterData,
}) {
  return (
    <>
      {filterChange === true && filterData.length === 0 ? (
        <h1 className="text-center text-2xl text-yellow-200 pt-5">
          No Task Found!
        </h1>
      ) : (
        <ul className="mt-5">
          {tasks.map((task) => (
            <DisplayTask
              key={task.id}
              task={task}
              handelComplete={handelComplete}
              handelDeleteTask={handelDeleteTask}
              setModalMode={setModalMode}
            />
          ))}
        </ul>
      )}
    </>
  );
}
