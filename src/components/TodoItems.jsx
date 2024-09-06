import React, { useState } from "react";
import check from "../assets/tick.png";
import uncheck from "../assets/not_tick.png";
import remove from "../assets/delete.png";
import edit from "../assets/edit.png";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TodoItems = ({
  text,
  id,
  isComplete,
  deleteTodo,
  toogle,
  updateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(id, newText);
    setIsEditing(false);
  };

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
        className="w-[40px] cursor-pointer mr-7"
        src={edit}
        alt="Edit Task Icon"
        onClick={handleEdit}
      />
      <img
        className="w-[40px] cursor-pointer"
        src={remove}
        alt="Delete Task Icon"
        onClick={() => {
          deleteTodo(id);
        }}
      />

      {/* Edit Task Button and UI using Card Component */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Card className="p-6 rounded-3xl shadow-lg max-w-md w-full bg-gradient-to-r from-blue-100 to-blue-400">
            <h3 className="text-lg font-bold mb-4">Edit Task</h3>
            <Input
              className="w-full mb-5 p-4 border border-gray-300 rounded-full"
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <Button
                className="bg-gradient-to-r from-slate-500 to-slate-700 text-white hover:from-slate-600 hover:to-slate-800 active:from-slate-700 active:to-slate-900 transition-all duration-200 px-4 py-2 rounded-full"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 active:from-blue-700 active:to-blue-900 transition-all duration-200 px-4 py-2 rounded-full"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
