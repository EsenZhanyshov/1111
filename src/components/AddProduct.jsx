import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!name.trim() || !phone.trim() || !img.trim()) {
      return;
    }
    let newObj = {
      todoName: name,
      todoPhone: phone,
      todoImg: img,
    };
    addTodo(newObj);
    setName("");
    setPhone("");
    setImg("");
    navigate("/");
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        value={name}
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={phone}
        label="Phone"
        variant="outlined"
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        value={img}
        label="Img"
        variant="outlined"
        onChange={(e) => setImg(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Add Todo
      </Button>
    </div>
  );
};

export default AddProduct;
