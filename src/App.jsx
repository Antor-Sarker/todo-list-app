import { useEffect, useState } from "react";
import initialLocalData from "./utils/initialLocalData";

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(initialLocalData());
  }, []);

  console.log(taskList);
  return (
    <>
      <h1>data</h1>
      {taskList.length}
    </>
  );
}

export default App;
