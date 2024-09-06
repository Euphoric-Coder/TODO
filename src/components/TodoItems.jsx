import React from "react";
import check from "../assets/tick.png";
import uncheck from "../assets/not_tick.png";
import remove from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toogle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => {
          toogle(id);
        }}
      >
        <img
          className="w-[35px]"
          src={isComplete ? check : uncheck}
          alt="Checked Icon"
        />
        <p
          className={`text-blue-900 ml-4 text-[20px] font-semibold italic decoration-blue-900 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        className="w-[30px] cursor-pointer"
        src={remove}
        alt="Delete Task Icon"
        onClick={() => {
          deleteTodo(id);
        }}
      />
    </div>
  );
};

export default TodoItems;
