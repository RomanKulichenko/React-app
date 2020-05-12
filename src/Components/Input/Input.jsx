import React from 'react';
import s from './Input.module.css'

function Input({ onCreate }) {

   const [value, setValue] = React.useState('');

   function submitHandler(event) {
      event.preventDefault()

      // Если значение пустое - передаём значение value
      if(value.trim()) {
         onCreate(value)
         setValue('')
      }
   }

   return (
      <form onSubmit={submitHandler}>
         <div className={s.wrapper}>
            <input 
               type="text" 
               value={value} 
               onChange={event => setValue(event.target.value)} 
               className={s.input} 
               placeholder='> Add new to-do...' />
            <button className={s.button} type='submit'> > Add todo </button>
         </div>
      </form >
   )
}

export default Input;