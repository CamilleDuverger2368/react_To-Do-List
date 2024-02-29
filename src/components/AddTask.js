import { useContext, useState } from "react"
import { TasksDispatchContext } from "../context/TasksContext"

export default function AddTask() {

  const [text, setText] = useState('')
  const [id, setId] = useState(0)
  const [velocity, setVelocity] = useState("medium")
  const dispatch = useContext(TasksDispatchContext)

  function handleSubmit(e) {

    e.preventDefault()

    if (text !== "") {

      dispatch({
          type: "added",
          id: id,
          text: text,
          velocity: velocity
      })
      
      setText('')
      setId(id + 1)
    }
  }

  return (
    <form className="new-task" onSubmit={ e => handleSubmit(e) }>
        <input className="input-task" type="text" placeholder="Je dois ..." value={ text } onChange={ e => setText(e.target.value) } />
        <div className="select">
          <select onChange={ e => setVelocity(e.target.value) } defaultValue={ velocity } >
              <option  value="hot">Urgent</option>
              <option  value="medium">Medium</option>
              <option value="low">Chill</option>
          </select>
        </div>
        <button className="add-task" type="submit" onClick={ e => handleSubmit(e) }>Ajouter</button>
    </form>
  )
}