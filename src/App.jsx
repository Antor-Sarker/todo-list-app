import { useEffect, useReducer, useState } from "react";
import taskReducer from "./Reducer/taskReducer";
import AddTaskModal from "./components/Header/AddTaskModal";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import initialLocalStorageData from "./utils/initialLocalStorageData";

function App() {
  const [modalMode, setModalMode] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [filterChange, setFilterChange] = useState(false);
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    dispatch({
      type: "InitialLocalData",
      payload: initialLocalStorageData(),
    });
  }, []);

  function handelAddTask(newTask) {
    dispatch({
      type: "AddTask",
      payload: newTask,
    });
    setFilterChange(false)
    setFilterData([])
    setModalMode(false);
  }

  function handelPriority(option) {
    dispatch({
      type: "Priority",
      payload: { option, setFilterData, setFilterChange },
    });
  }

  function handelSearch(keyWord) {
    dispatch({
      type: "Search",
      payload: { keyWord, setFilterData, setFilterChange },
    });
  }

  function handelComplete(id) {
    dispatch({
      type: "Complete",
      payload: id,
    });
  }

  function handelDeleteTask(id) {
    dispatch({
      type: "Delete",
      payload: id,
    });
    setFilterChange(false);
    setFilterData([]);
  }

  function handelEditTask(data) {
    setModalMode(false);

    dispatch({
      type: "Edit",
      payload: data,
    });
  }

  return (
    <>
      <div className="bg-[#191D26] font-sans h-screen p-32 text-white">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] py-8 md:py-16">
          <Header
            setModalMode={setModalMode}
            tasks={filterData?.length > 0 ? filterData : tasks}
            handelPriority={handelPriority}
            handelSearch={handelSearch}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={filterData.length > 0 ? filterData : tasks}
              modalMode={modalMode}
              setModalMode={setModalMode}
              handelComplete={handelComplete}
              handelDeleteTask={handelDeleteTask}
              filterChange={filterChange}
              filterData={filterData}
            />
          ) : (
            <h1 className="text-center text-2xl text-yellow-200 pt-5">
              Task List is Empty!
            </h1>
          )}

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
