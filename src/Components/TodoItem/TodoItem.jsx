import React from 'react';
import s from './TodoItem.module.css'

function TodoItem({ todo, toggleCheckbox, deleteTodo }) {

   const classes = []
   let visibleButton = []

   if(todo.completed) {
      classes.push('done')
      visibleButton = {visibility: 'visible'}
   }


   return (
      <li>
         <div className={s.item}>
            <div>
               <input 
                  checked={todo.completed}
                  type="checkbox" 
                  className={s.TodoItemCheckbox} 
                  onChange={() => toggleCheckbox(todo.id)}/>
               {/* <label for="checkbox-id"> - {todo.title} </label> */}
               <span className={s.text + " " + classes.join(' ')}> {todo.title} </span>
               {/* <button style={visibleButton} className={s.button} onClick={() => deleteTodo(todo.id)}>DELETE</button> */}
            </div>
            {/* - {todo.title} */}
            <button style={visibleButton} className={s.button} onClick={() => deleteTodo(todo.id)}>DELETE</button>
         </div>
      </li>
   )
}

export default TodoItem;
