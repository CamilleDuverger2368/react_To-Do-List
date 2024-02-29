import { useContext, useState, useEffect } from "react"
import { TasksContext } from "../context/TasksContext"
import Task from "./Task"
import DateEmergencyFilters from "./DateEmergencyFilters"
import DoneTodoFilters from "./DoneToDoFilters"

export default function TaskList() {

    const tasks = useContext(TasksContext)
    const [filtered, setFiltered] = useState(tasks)
    const [filter, setFilter] = useState("asc")
    const [category, setCategory] = useState("all")

    useEffect(() => {

        filterTasks()
    }, [filter])

    useEffect(() => {

        categoriesTasks()
    }, [tasks, category])

    function filterTasks() {

        switch (filter) {

            case "asc" : {

                let copiedArr = [...filtered]
                setFiltered(copiedArr.sort((a, b) => a.id - b.id))
                break
            }

            case "desc" : {

                let copiedArr = [...filtered]
                setFiltered(copiedArr.sort((a, b) => b.id - a.id))
                break
            }

            case "hot" : {

                const hot = filtered.filter(task => task.velocity === "hot")
                const medium = filtered.filter(task => task.velocity === "medium")
                const low = filtered.filter(task => task.velocity === "low")

                setFiltered(hot.concat(medium.concat(low)))
                break
            }

            case "low" : {

                const hot = filtered.filter(task => task.velocity === "hot")
                const medium = filtered.filter(task => task.velocity === "medium")
                const low = filtered.filter(task => task.velocity === "low")

                setFiltered(low.concat(medium.concat(hot)))
                break
            }

            default : {

                throw Error("unknown filter : " + filter)
            }
        }
    }

    function categoriesTasks() {

        switch (category) {

            case "all" : {
                
                setFiltered(tasks)
                filterTasks()
                break
            }

            case "done" : {

                setFiltered(tasks.filter( task => task.done !== false))
                filterTasks()
                break
            }

            case "to-do" : {

                setFiltered(tasks.filter( task => task.done === false))
                filterTasks()
                break
            }

            default : {

                throw Error("unknown category: " + category)
            }
        }
    }

    return (
        <>
            <DateEmergencyFilters
                filter={ filter }
                onChangeOrderDate={ setFilter }
                onChangeOrderVelocity={ setFilter }
            />
            <ul className="to-do-list">
                { filtered.map( task => (
                    <li key={ task.id }>
                        <Task task={ task } />
                    </li>
                ))}
            </ul>
            {(
                tasks.length > 0
                &&
                <DoneTodoFilters
                    category={ category }
                    onChange={ setCategory }
                />
            )}
        </>
    )
}