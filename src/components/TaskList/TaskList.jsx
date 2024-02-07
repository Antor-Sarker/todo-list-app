/* eslint-disable react/prop-types */


export default function TaskList({ taskListData, setModalMode, handelComplete, handelDeleteTask}) {
  return (
    <>
      <ul>
        {taskListData.map((task) => (
          <DisplayTask key={task.id} task={task} handelComplete={handelComplete}  handelDeleteTask={handelDeleteTask} setModalMode={setModalMode} />
        ))}
      </ul>
    </>
  );
}

function DisplayTask({ task, handelComplete, handelDeleteTask, setModalMode}) {
    return (
      <>
        <li className="flex p-5 justify-center">
          <label htmlFor="task" className={`p-1 ${task.isComplete && "line-through"}`}>
            <input type="checkbox" name="task"  onClick={()=>handelComplete(task.id)}/>
            {task.name}
          </label>
          <div className="p-1">{task.priority}</div>
          <button className="p-1" onClick={()=>handelDeleteTask(task.id)}>delete</button>
          <button className="p-1" onClick={()=>setModalMode(task)}>edit</button>
        </li>
      </>
    );
  }
