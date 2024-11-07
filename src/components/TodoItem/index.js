import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo, onEditedTask} = props
  const {id, title} = todo

  const onDelete = () => {
    deleteTodo(id)
  }

  const [isEdit, setIsEdit] = useState(false)
  const [isChecked, setCheck] = useState(false)
  const [taskTitle, setTaskTitle] = useState(title)

  const onClickEdit = () => {
    setIsEdit(true)
  }
  const onSaveEditTask = () => {
    setIsEdit(false)
    onEditedTask(id, taskTitle)
  }
  const onChangeTitle = event => {
    setTaskTitle(event.target.value)
  }
  const onClickCheckInput = event => {
    setCheck(event.target.checked)
  }

  return (
    <li className="todo-card">
      {isEdit ? (
        <div className="text-btn-div">
          <input
            className="edit-input"
            type="text"
            value={taskTitle}
            onChange={onChangeTitle}
          />
          <button
            className="save-edit-btn"
            type="button"
            onClick={onSaveEditTask}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="text-btn-div">
          <div className="input-label-div">
            <input
              className="check-box"
              checked={isChecked}
              onChange={onClickCheckInput}
              type="checkbox"
              id={id}
            />
            <p htmlFor={id} className="title">
              {title}
            </p>
          </div>
          <button className="save-edit-btn" type="button" onClick={onClickEdit}>
            Edit
          </button>
        </div>
      )}

      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
