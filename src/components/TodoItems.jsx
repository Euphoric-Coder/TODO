import React from "react";
import check from "../assets/tick.png";
import uncheck from "../assets/not_tick.png";
import remove from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img className="w-7" src={check} alt="Checked Icon" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <img
        className="w-[30px] cursor-pointer"
        src={remove}
        alt="Delete Task Icon"
        onClick={()=>{deleteTodo(id)}}
      />
    </div>
  );
};

export default TodoItems;
