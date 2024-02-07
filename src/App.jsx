import { useEffect, useState } from "react";
import initialLocalData from "./utils/initialLocalData";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(initialLocalData());
  }, []);

  console.log(taskList);
  return (
    <>
      <div className="bg-[#191D26] font-sans h-full p-32 text-white">
      <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
        <Header/>
        <TaskList/>
      </div>
    </div>
    </>
  );
}

export default App;
