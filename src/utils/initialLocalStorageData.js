export default function initialLocalStorageData() {
  const data = JSON.parse(localStorage.getItem("taskList"));
  if (data && data.length > 0) {
    return data;
  } else {
    const newTask = [
      {
        id: crypto.randomUUID(),
        name: "task-1",
        isComplete: false,
        priority: "High",
      },
    ];

    localStorage.setItem("taskList", JSON.stringify(newTask));
    return newTask;
  }
}
