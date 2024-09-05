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
      {/* input box  */}
      <div className="flex items-center my-7 rounded-full bg-gray-200">
        <Input
          className="rounded-full inline bg-transparent text-lg border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 placeholder:text-lg font-mono ing-0 focus-visible:ring-offset-0 focus-visible:ring-0"
          type="text"
          placeholder="Add Your Task"
        />
        <Button className="inline rounded-full h-14 w-[130px] bg-orange-600  hover:bg-pink-600 active:bg-red-700 text-lg text-white font-medium cursor-pointer">
          ADD +
        </Button>
      </div>
    </div>
  );
}

export default Todo