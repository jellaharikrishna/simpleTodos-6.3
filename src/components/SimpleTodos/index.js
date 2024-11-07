import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, newTodo: ''}

  addNewTodo = event => this.setState({newTodo: event.target.value})

  addNewTodoToTodoslist = () => {
    const {newTodo} = this.state

    const newTodoObj = {
      id: uuidv4(),
      title: newTodo,
    }

    if (newTodo !== '') {
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodoObj],
      }))
    }
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredDeleteTodo = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: filteredDeleteTodo})
  }

  onSaveExitingTask = (id, taskTitle) => {
    const {todosList} = this.state
    const newUpdatedList = todosList.map(each => {
      if (each.id === id) {
        return {...each, title: taskTitle}
      }
      return each
    })

    this.setState({todosList: newUpdatedList})
  }

  render() {
    const {todosList, newTodo} = this.state
    return (
      <div className="bg-container">
        <div className="simpletodos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-card">
            <input
              className="add-todo-text"
              type="text"
              placeholder="Add Task"
              value={newTodo}
              onChange={this.addNewTodo}
            />
            <button
              className="add-todo-btn"
              type="button"
              onClick={this.addNewTodoToTodoslist}
            >
              Add
            </button>
          </div>
          <ul className="todos-card-container">
            {todosList.map(eachTodo => (
              <TodoItem
                todo={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
                onEditedTask={this.onSaveExitingTask}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
