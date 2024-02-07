function addToLocalStorage(newTask){
    const data = JSON.parse(localStorage.getItem("taskList"))
    const updatedData = [
      newTask,
      ...data
    ]
    localStorage.setItem("taskList", JSON.stringify(updatedData))
}

function updateLocalStorage(updatedData){
    localStorage.setItem("taskList", JSON.stringify(updatedData))
}

export { addToLocalStorage, updateLocalStorage}