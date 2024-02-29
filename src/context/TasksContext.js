import { createContext, useReducer } from "react"

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {

    const [tasks, dispatch] = useReducer(tasksReducer, [])

    function tasksReducer(tasks, action) {
        
        switch (action.type) {

            case "added": {

                return ([...tasks, {
                    id: action.id,
                    text: action.text,
                    velocity: action.velocity,
                    done: false
                }])
            }

            case "changed": {

                return (tasks.map((task) => {

                    if (task.id === action.task.id) {

                        return (action.task)
                    } else {
                        
                        return (task)
                    }
                }))
            }

            case "deleted": {

                return (tasks.filter( task => task.id !== action.id ))
            }

            default: {
                
                throw Error("unknown action: " + action.type)
            }
        }
    } 

    return(
        <TasksContext.Provider value={ tasks }>
            <TasksDispatchContext.Provider value={ dispatch }>
                { children }
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}