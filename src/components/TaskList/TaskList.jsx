/* eslint-disable react/prop-types */


export default function TaskList({ taskListData, handelDeleteTask}) {
  return (
    <>
      <ul>
        {taskListData.map((task) => (
          <DisplayTask key={task.id} task={task}  handelDeleteTask={handelDeleteTask}/>
        ))}
      </ul>
    </>
  );
}

function DisplayTask({ task, handelDeleteTask }) {
    return (
      <>
        <li className="flex p-5 justify-center">
          <label htmlFor="task" className="p-1">
            <input type="checkbox" name="task" id="" />
            {task.name}
          </label>
          <div className="p-1">{task.priority}</div>
          <button className="p-1" onClick={()=>handelDeleteTask(task.id)}>delete</button>
          <button className="p-1">edit</button>
        </li>
      </>
    );
  }
