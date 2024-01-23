import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [oneTodo, setOneTodo] = useState("");
  // ! CREATE
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };

  // ! READ
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect(() => {
  //     if (!todos) {
  //       setTodos(getTodos());
  //     }
  //   }, [todos]);
  // ! delete
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getTodos();
  };
  // ! edit
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setOneTodo(data);
  };
  const editTodo = async () => {};
  const values = {
    addTodo,
    getTodos,
    todos,
    deleteTodo,
    editTodo,
    getOneProduct,
    oneTodo,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
