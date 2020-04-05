import React from 'react'
import ToDoList from './todo/TodoList'

function App() {
  let todos = [
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy eggs'},
    {id: 3, completed: false, title: 'Buy milk'}
  ]

  function toggleTodo(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
    <div className='wrapper'>
      <h1>React App</h1>
      <ToDoList todos={todos} onToggle={toggleTodo}></ToDoList>
    </div>
  )
}

export default App
