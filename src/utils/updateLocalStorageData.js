export default function updateLocalStorage(updatedData) {
  localStorage.setItem("taskList", JSON.stringify(updatedData));
}