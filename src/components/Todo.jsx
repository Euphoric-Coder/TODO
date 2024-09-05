import React from 'react'
import todo from "../assets/todo_icon.png"
import { Input } from './ui/input'
import { Button } from './ui/button'


const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-3xl">
      {/* title  */}
      <div className="flex items-center mt-7 gap-2 place-self-center">
        <img className="w-14" src={todo} alt="Todo App icon" />
        <h1 className="text-[30pt] font-serif font-semibold">To-Do List</h1>
      </div>
    </div>
  );
}

export default Todo