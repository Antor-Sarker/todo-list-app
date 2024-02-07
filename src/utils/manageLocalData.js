function addToLocalStorage(newTask){
    const data = JSON.parse(localStorage.getItem("taskList"))
    const updatedData = [
      newTask,
      ...data
    ]
    localStorage.setItem("taskList", JSON.stringify(updatedData))
}

function deleteFromLocalStorage(updatedTask){
    // const data = JSON.parse(localStorage.getItem("taskList"))
    // const updatedData = [
    //   newTask,
    //   ...data
    // ]
    localStorage.setItem("taskList", JSON.stringify(updatedTask))
}


export { addToLocalStorage, deleteFromLocalStorage}