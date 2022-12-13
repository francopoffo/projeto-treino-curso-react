import React, { useState } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function Form(props) {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

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

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError(
        <ErrorModal
          title="Erro de campo vazio"
          message="O campo do usuário e/ou idade não pode estar em branco."
          onClick={onCloseModal}
        />
      );
    }
    if (+enteredAge < 1) {
      return setError(
        <ErrorModal
          title="Erro na idade"
          message="A idade não pode ser negativa."
          onClick={onCloseModal}
        />
      );
    }

    props.onSaveUserData(enteredData);

    setEnteredUser("");
    setEnteredAge("");
  };

  function onCloseModal(){
    setError();
  }

  return (
    <>
      {error}
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
        <Button type="submit">Adicionar</Button>
      </form>
    </>
  );
}

export default Form;
