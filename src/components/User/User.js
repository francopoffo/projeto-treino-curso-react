import React from 'react'
import classes from './User.module.css'
import Button from '../UI/Button'

function User(props) {

 
  return (
    <li id={props.id} className={classes.user}>
        <p>{props.name} ({props.age} anos)</p>
        <Button className={classes.button} onClick={() => props.onRemoveUser(props.id)}>X</Button>
    </li>
  )
}

export default User