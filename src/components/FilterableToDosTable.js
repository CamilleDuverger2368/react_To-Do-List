import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { TasksProvider } from "../context/TasksContext"

export default function FilterableToDosTable() {

    return (
        <TasksProvider>
            <div className="container">
                <AddTask />
                <TaskList />
            </div>
        </TasksProvider>
    )
}