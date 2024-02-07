/* eslint-disable react/prop-types */
import AddTaskModal from "./AddTaskModal";

function Header({modalMode,setModalMode, handelAddTask}) {

  return (
    <div className="">
      <div className="flex justify-center">
        <div>
          <input type="search" name="" id="" placeholder="Search Task" />
        </div>
        <div className="bg-green-500 text-white">
          <button onClick={()=>setModalMode(true)}>add Task</button>
        </div>
      </div>

      {modalMode && <AddTaskModal setModalMode={setModalMode} handelAddTask={handelAddTask}/>}

      <div className="flex justify-center">
        <select name="" id="" className="bg-black">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div>
          <p>
            Total: {2}| Complete: {1}
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Header;
