function TaskList(){
    return(
        <>
            <ul>
                <li className="flex p-5 justify-center">
                    <label htmlFor="task" className="p-1">
                    <input type="checkbox" name="task" id="" />
                    {"Task-1"}
                    </label>
                    <div className="p-1">High</div>
                    <button className="p-1">delete</button>
                    <button className="p-1">edit</button>
                </li>
            </ul>
        </>
    )
}

export default TaskList