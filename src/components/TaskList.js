import React from 'react'
import {Link} from 'react-router-dom'
function TaskList(props) {

  const items = props.tasks.map((task, index) => (
    <div key={index}>
      {task.todo_description}
      <button className='btn btn-danger ' onClick={props.onDeleteTask.bind(null, task._id)}>Delete</button>
      <button className='btn btn-primary miStyle'><Link to={`/mytasks/view/${task._id}`}>View</Link></button>
      </div>))
  return (
    <div>
      <br></br>
      <h2>{props.title}</h2>
      <div className="row">
        <div id="todo-list" className="col-sm">
          {items}
        </div>
      </div>
    </div>
  )
}
export default TaskList
