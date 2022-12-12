import React from 'react'
import classes from './Form.module.css'

function Form() {
  return (
    <form className={classes.form}>
        <label className={classes.label} htmlFor='username'>Username</label>
        <input className={classes.input} type='text' id='username'></input>
        <label className={classes.label} htmlFor='age'>Idade (anos)</label>
        <input className={classes.input} type='number' id='age'></input>
        <button className={classes.button} type='submit'>Adicionar</button>
    </form>
  )
}

export default Form