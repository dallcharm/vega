import React from 'react'
function AddTask (props) {
  return (
    <form onSubmit={props.onAddTask}>
    <div className="form-group" >
    <label htmlFor="ask-task-area">Ingresa la tarea</label>
    <textarea 
    value={props.taskValue}
    onChange={props.onChange}
    className="form-control"
    ></textarea>
    </div>
    <button className="btn btn-primary" >Add task to list</button>
  </form>
  )
}

export default AddTask
