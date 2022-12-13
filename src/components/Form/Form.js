import React, { useState } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      name: enteredUser,
      age: +enteredAge,
      id: Number(new Date()),
    };
    

    props.onSaveUserData(enteredData);

    setEnteredUser("");
    setEnteredAge("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor="username">
        Username
      </label>
      <input
        className={classes.input}
        value={enteredUser}
        type="text"
        id="username"
        onChange={userChangeHandler}
      />
      <label className={classes.label} htmlFor="age">
        Idade (anos)
      </label>
      <input
        className={classes.input}
        value={enteredAge}
        type="number"
        id="age"
        onChange={ageChangeHandler}
      />
      <button className={classes.button} type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default Form;
