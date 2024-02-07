/* eslint-disable react/prop-types */

import DisplayTask from "./DisplayTask";

export default function TaskList({
  tasks,
  setModalMode,
  handelComplete,
  handelDeleteTask,
}) {
  return (
    <>
      <ul>
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
    </>
  );
}

