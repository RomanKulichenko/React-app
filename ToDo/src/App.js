import React from 'react';
import './App.css';
import TodoList from './Components/TodoList'
import Input from './Components/Input/Input'


function App() {

   const [todos, setTodos] = React.useState(
      [
         { id: 1, completed: false, title: 'test1' },
         { id: 2, completed: false, title: 'test2' },
         { id: 3, completed: false, title: 'test3' }
      ]
   )

   // let state = {
   //   todo: [
   //     {id: 1, completed: false, title: 'test1'},
   //     {id: 2, completed: false, title: 'test2'},
   //     {id: 3, completed: false, title: 'test3'}
   //   ]
   // }

   function toggleCheckbox(id) {
      setTodos(
         todos.map(todo => {
            if (todo.id === id) {
               todo.completed = !todo.completed
            };

            return todo
         })
      )
   }

   function deleteTodo(id) {
      setTodos(
         todos.filter(todo => todo.id !== id)
      )
   }

   function addTodo(title) {
      setTodos(
         todos.concat([
            {
               id: Date.now(),
               completed: false,
               title,
            }
         ])
      )
   }


   return (
      <div className="App">
         <div className="frosted">
            <div className="wrapper">
               <Input onCreate={addTodo} />
               {todos.length ?
                  <TodoList
                     todo={todos}
                     toggleCheckbox={toggleCheckbox}
                     deleteTodo={deleteTodo} /> :

                  <p className="warning">You don't have todo.</p>}
               {/* <TodoList todo={todos} toggleCheckbox={toggleCheckbox} /> */}
            </div>
         </div>

      </div>
   );
}

export default App;
