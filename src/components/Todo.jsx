import { useEffect, useRef, useState } from "react";
import todo from "../assets/todo_icon.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, settodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    settodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    settodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toogle = (id) => {
    settodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  const updateTodo = (id, newText) => {
    settodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-400 place-self-center w-[900px] max-w-lg flex flex-col p-7 min-h-[800px] rounded-3xl">
      {/* Title of the App */}
      <div className="flex items-center mt-7 gap-2 place-self-center">
        <img className="w-14" src={todo} alt="Todo App icon" />
        <h1 className="text-[30pt] font-serif font-semibold">To-Do List</h1>
      </div>
      {/* Task Input Field & Add Button */}
      <div className="flex items-center my-7 rounded-full bg-white">
        <Input
          className="rounded-full inline bg-transparent text-lg border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 placeholder:text-lg font-mono ing-0 focus-visible:ring-offset-0 focus-visible:ring-0"
          type="text"
          placeholder="Add Your Task"
          ref={inputRef}
        />
        <Button
          className="inline rounded-full h-14 w-[125px] bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 active:from-blue-700 active:to-blue-900 transition-all duration-200 text-lg font-medium cursor-pointer"
          onClick={add}
        >
          ADD +
        </Button>
      </div>
      {/* Todo List Section */}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toogle={toogle}
              updateTodo={updateTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
