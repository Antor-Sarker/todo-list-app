import { useEffect, useState } from "react";
import AddTaskModal from "./components/Header/AddTaskModal";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import initialLocalData from "./utils/initialLocalData";
import { addToLocalStorage, updateLocalStorage } from "./utils/manageLocalData";

function App() {
  const [taskListData, setTaskListData] = useState([]);
  const [modalMode, setModalMode] = useState(false);
  useEffect(() => {
    setTaskListData(initialLocalData());
  }, []);

  function handelAddTask(newTask) {
    setTaskListData([newTask, ...taskListData]);
    addToLocalStorage(newTask);
    setModalMode(false);
  }


function handelComplete(id) {
  console.log(id)
  const updatedTask = taskListData.map((task) => {
    if (task.id === id) return {...task, isComplete: !task.isComplete}
    else return task;
  });

  setTaskListData([...updatedTask]);
  updateLocalStorage(updatedTask);
  }


  function handelDeleteTask(id) {
    const afterDeleteData = taskListData.filter((task) => task.id !== id);
    setTaskListData([...afterDeleteData]);

    updateLocalStorage(afterDeleteData);
  }

  function handelEditTask(data) {
    const updatedTask = taskListData.map((task) => {
      if (task.id === data.id) return data;
      else return data;
    });

    setTaskListData([...updatedTask]);
    updateLocalStorage(updatedTask);

    setModalMode(false);
  }

  return (
    <>
      <div className="bg-[#191D26] font-sans h-full p-32 text-white">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <Header
            modalMode={modalMode}
            taskListData={taskListData}
          />

          <TaskList
            taskListData={taskListData}
            modalMode={modalMode}
            setModalMode={setModalMode}
            handelComplete={handelComplete}
            handelDeleteTask={handelDeleteTask}
          />
          {modalMode && (
            <AddTaskModal
              modalMode={modalMode}
              setModalMode={setModalMode}
              handelAddTask={handelAddTask}
              handelEditTask={handelEditTask}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
