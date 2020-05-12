import React from 'react';
import TodoItem from './TodoItem/TodoItem'

function TodoList(props) {
   return (
      <ul>
         {/* <Input /> */}

         {props.todo.map((todo) => {
            return <TodoItem
               todo={todo}
               key={todo.id}
               toggleCheckbox={props.toggleCheckbox}
               deleteTodo={props.deleteTodo}
            />
         })}
      </ul>
   )
}


export default TodoList;