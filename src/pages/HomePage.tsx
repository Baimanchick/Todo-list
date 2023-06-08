import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import { log } from "console";
import TodoList from "../components/TodoList";
import { ITodo } from "../interfaces/interface";

// declare var confim: (question: string) => boolean;

const HomePage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos]);
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm(
      "Вы уверены, что хотите удалить элемент?"
    );
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <div className="container">
        <TodoForm onAdd={addHandler} />

        <TodoList
          todos={todos}
          onToggle={handleToggler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};

export default HomePage;
