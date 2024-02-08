import updateLocalStorage from "../utils/updateLocalStorageData";

export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "InitialLocalData": {
      return [...action.payload];
    }
    case "AddTask": {
      updateLocalStorage([action.payload, ...tasks]);
      return [action.payload, ...tasks];
    }

    case "Priority": {
      const { option, setFilterData, setFilterChange } = action.payload;

      setFilterChange(true);
      if (option === "All") {
        setFilterData([]);
        setFilterChange(false);
        return tasks;
      }

      const data = tasks.filter((task) => task.priority === option);
      if (data.length === 0) {
        setFilterData([]);
      } else setFilterData([...data]);
      return tasks;
    }

    case "Search": {
      const { keyWord, setFilterData, setFilterChange } = action.payload;
      setFilterChange(true);
      if (keyWord === "") {
        setFilterChange(false);
        setFilterData([]);
        return [...tasks];
      }

      const data = tasks.filter((task) =>
        task.name.toUpperCase().includes(keyWord.toUpperCase())
      );

      if (data.length > 0) setFilterData([...data]);
      return tasks;
    }

    case "Complete": {
      const updatedTask = tasks.map((task) => {
        if (task.id === action.payload)
          return { ...task, isComplete: !task.isComplete };
        else return task;
      });

      updateLocalStorage(updatedTask);
      return [...updatedTask];
    }

    case "Delete": {
      const afterDeleteData = tasks.filter(
        (task) => task.id !== action.payload
        );
        
      updateLocalStorage(afterDeleteData);
      return [...afterDeleteData];
    }

    case "Edit": {
      const updatedTask = tasks.map((task) => {
        if (task.id === action.payload.id) return action.payload;
        else return task;
      });

      updateLocalStorage(updatedTask);
      return [...updatedTask];
    }

    default: {
      throw console.error(`Error for ${action.type}`);
    }
  }
}
