import React from 'react'
import Navbar from '../components/genericComponents/Navbar'
import Jumbotron from '../components/genericComponents/Jumbotron'
import Footer from '../components/genericComponents/Footer'
import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'
import {getList, saveTask, deleteTask} from '../Services/TasksServices'


class TasksManager extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          tasks: [],
          taskValue: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onAddTask = this.onAddTask.bind(this)
        this.onDeleteTask = this.onDeleteTask.bind(this)
      }

  onAddTask (event) {
    event.preventDefault()
    const { taskValue, tasks } = this.state
    saveTask({ todo_description: taskValue })
      .then(() => {
        this.loadList()
        this.setState({
          taskValue: ''
        })
      })
  }

  onChange (event) {
    this.setState({
      taskValue: event.target.value
    })
  }
  onDeleteTask(item) {
    deleteTask({_id: item})
    .then(() => {
      const NewTaskList = this.state.tasks.filter((keepTasks) => {
          console.log(keepTasks);
        return keepTasks._id !== item
      })
      console.log(NewTaskList)
      this.setState({
        tasks: NewTaskList
      })
    })
  }

  loadList () {
    return getList()
      .then(tasks => {
        this.setState({
          tasks
        })
      })
  }
  componentDidMount () {
    this.loadList()
  }
  render(){
    return(
        <div>
            <Navbar />
            <Jumbotron title="Tasks Manager" subtiltle="Task Manager App" />
            <div className="container">
                <h2>
                    Task Manager Page
                </h2>
                <AddTask
          onAddTask={this.onAddTask}
          taskValue={this.state.taskValue}
          onChange={this.onChange}
        />
        <TaskList title='Tareas' tasks={this.state.tasks} onDeleteTask={this.onDeleteTask}/>
            </div>
            <Footer />
        </div>
    )
  }
}
export default TasksManager