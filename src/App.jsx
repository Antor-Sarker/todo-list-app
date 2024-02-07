import { useEffect, useState } from "react";
import initialLocalData from "./utils/initialLocalData";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { addToLocalStorage, deleteFromLocalStorage } from "./utils/manageLocalData";

function App() {
  const [taskListData, setTaskListData] = useState([]);
const [modalMode, setModalMode] = useState(false)
  useEffect(() => {
    setTaskListData(initialLocalData());
  }, []);

  function handelAddTask(newTask){
    setTaskListData([
      newTask,
      ...taskListData,
    ])
    addToLocalStorage(newTask)
    setModalMode(false)
  }

  function handelDeleteTask(id){
    const afterDeleteData = taskListData.filter(task=> task.id!==id)
    setTaskListData([
      ...afterDeleteData
    ])
    
    deleteFromLocalStorage(afterDeleteData)
  }

  

  return (
    <>
      <div className="bg-[#191D26] font-sans h-full p-32 text-white">
      <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
        <Header modalMode={modalMode} setModalMode={setModalMode} handelAddTask={handelAddTask}/>
        <TaskList taskListData={taskListData} modalMode={modalMode} handelDeleteTask={handelDeleteTask}/>
      </div>
    </div>
    </>
  );
}

export default App;
