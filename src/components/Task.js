import { useState, useContext } from "react"
import { TasksDispatchContext } from "../context/TasksContext"

export default function Task({ task }) {

    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(task.text)
    const [velocity, setVelocity] = useState(task.velocity)
    const dispatch = useContext(TasksDispatchContext)
    let taskContent
    
    function onEditText() {

      dispatch({
          type: "changed",
          task: {...task, text: text, velocity: velocity}
      })

      setIsEditing(false)
    }

    function onDelete() {

      dispatch({
          type: "deleted",
          id: task.id
      })
    }

    if (isEditing) {

      taskContent = (
        <>
          <div className="informations-task">
            <input className="update-text" value={ text } onChange={ e => setText(e.target.value) } />
            <div className="select update-velocity">
              <select onChange={ e => setVelocity(e.target.value) } defaultValue={ velocity } >
                  <option  value="hot">Urgent</option>
                  <option  value="medium">Medium</option>
                  <option value="low">Chill</option>
              </select>
            </div>
          </div>
          <div className="actions-task">
            <button className="action" onClick={ onEditText }>Enregistrer</button>
            <button className="action remove" onClick={ onDelete }>Supprimer</button>
          </div>
        </>
      )
    } else {

      taskContent = (
        <>
          <div className="informations-task">
            { task.text }
          </div>
          <div className="actions-task">
            <button className="action" onClick={ () => setIsEditing(true) }>Modifier</button>
            <button className="action remove" onClick={ onDelete }>Supprimer</button>
          </div>
        </>
      )
    }

    return (
      <label className={ "task " + task.velocity }>
        <input type="checkbox" checked={ task.done } onChange={ e => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked
            }
          })
        } } />
        { taskContent }
      </label>
    )
}