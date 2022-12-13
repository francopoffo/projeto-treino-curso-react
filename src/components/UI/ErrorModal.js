import React from "react";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Fechar</Button>
        </footer>
      </div>
    </div>
  );
}

export default ErrorModal;
