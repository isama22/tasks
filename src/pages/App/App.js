import React, { Component } from 'react'
import './App.css';
import Tasks from '../../components/Tasks/Tasks'
import AddTask from '../../components/AddTask/AddTask'
import * as tasksAPI from '../../services/tasks-api'

class App extends Component {
  state = {
    tasks: [],
  }
  //lifecycle methods
  handleAddTask = async newTaskData => {
    const newTask = await tasksAPI.create(newTaskData)
    this.setState(state => ({
      tasks: [...state.tasks, newTask]
    }),
      () => this.props.history.push('/'))
  }
  handleGetAllTasks = async () => {
    const tasks = await tasksAPI.getAll()
    this.setState({ tasks: tasks })
  }
  //helper functions
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async componentDidMount() {
    const tasks = await tasksAPI.getAll()
    this.setState({ tasks })
  }
  render() {
    return (
      <>
        <div>
          home
      </div>
        <div>
          task list:
        <Tasks
            tasks={this.state.tasks}
            handleGetAllTasks={this.props.handleGetAllTasks}
            // history={history}
          />
        </div>
        <AddTask
          // tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
        />
      </>
    )
  }
}

export default App;
