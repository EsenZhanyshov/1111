import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { getTodos, todos } = useContext(productContext);
  console.log(todos);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="grid">
      {todos.map((elem) => (
        <TodoItem key={elem.id} {...elem} />
      ))}
    </div>
  );
};

export default TodoList;
