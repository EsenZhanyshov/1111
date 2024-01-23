import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { editTodo, getOneProduct, oneTodo } = useContext(productContext);
  const [name, setName] = useState(oneTodo.todoName);
  const [phone, setPhone] = useState(oneTodo.todoPhone);
  const [img, setImg] = useState(oneTodo.todoImg);
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setName(oneTodo.todoName);
      setPhone(oneTodo.todoPhone);
      setImg(oneTodo.todoImg);
    }
  }, [oneTodo]);
  return (
    <div>
      <TextField
        value={name}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        value={phone}
        id="outlined-basic"
        label="Phone"
        variant="outlined"
      />
      <TextField
        value={img}
        id="outlined-basic"
        label="Img"
        variant="outlined"
      />
      <button variant="contained">Save</button>
    </div>
  );
};

export default EditProduct;
