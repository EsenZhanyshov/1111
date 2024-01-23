import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Link } from "react-router-dom";

const TodoItem = ({ todoImg, todoName, todoPhone, id }) => {
  const { deleteTodo } = useContext(productContext);
  return (
    <div className="grid-item">
      <img src={todoImg} alt="#" />
      <h3>{todoName}</h3>
      <h4>{todoPhone}</h4>
      <button onClick={() => deleteTodo(id)} variant="contained">
        Delete
      </button>
      <Link to={`/edit/${id}`}>
        <button variant="contained">Edit</button>
      </Link>
    </div>
  );
};

export default TodoItem;
